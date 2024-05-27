import { Body, Controller, Post } from "@nestjs/common";
import { Pagamento, Prisma } from "@prisma/client";
import { PagamentoService } from "./pagamento.service";


@Controller('pagamento')
export class PagamentoController {
    constructor(
        private readonly pagamentoService: PagamentoService
    ) {}

    @Post('enviar')
    async sendData(@Body() data: Prisma.PagamentoCreateInput): Promise<Pagamento>{
        return await this.pagamentoService.criar(data)
    }
}