import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Prisma, Pagamento } from "@prisma/client";
import { randomUUID } from "crypto";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class PagamentoService {
    constructor(private prisma: PrismaService) { }
    @Inject('SERVICO_DE_NOTIFICACAO') private cliente: ClientProxy;

    async criar(dados: Prisma.PagamentoCreateInput): Promise<Pagamento> {

        const pagamento = await this.prisma.pagamento.create({
            data: { ...dados }
        });

        this.enviarRegistroDeNotificacaoDepagamento(JSON.stringify(pagamento));

        this.processamentoDePagamento(pagamento);


        return pagamento;
    }

    async processamentoDePagamento (pagamento: Pagamento){
        setTimeout(() => this.enviarConfirmacaoDeNotificacaoDepagamento(JSON.stringify(pagamento)), 5000);
    }

    enviarRegistroDeNotificacaoDepagamento(mensagem: string) {
        try {
            this.cliente.emit('registro', {
                id: randomUUID(),
                dados: {notificacao: mensagem},
            })
        } catch (error) {
            console.log(`Registro: ${error}`)
        }
    }


    enviarConfirmacaoDeNotificacaoDepagamento(mensagem: string) {
        try {
            this.cliente.emit('registro', {
                id: randomUUID(),
                dados: {notificacao: mensagem},
            })
        } catch (error) {
            console.log(`Confirmacao: ${error}`)
        }
    }
}