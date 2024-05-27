import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

import { ClientsModule, Transport } from "@nestjs/microservices";
import { PagamentoService } from "./pagamento.service";
import { PagamentoController } from "./pagamento.controller";






@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'SERVICO_DE_NOTIFICACAO',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://admin:123456@localhost'],
                    queue: 'notificacao',
                    
                    queueOptions: {
                        durable: true,
                    }
                }
            }]
        )],
    controllers: [PagamentoController],
    providers: [PagamentoService, PrismaService],
})

export class PagamentoModule {}
