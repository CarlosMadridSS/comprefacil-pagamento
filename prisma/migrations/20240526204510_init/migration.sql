
-- CreateEnum
CREATE TYPE "TipoPagamento" AS ENUM ('boleto', 'cartao_de_credito', 'pix');


-- CreateTable
CREATE TABLE "Pagamento" (
    "id" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "numeroPedido" INTEGER NOT NULL,
    "valorPedido" DOUBLE PRECISION NOT NULL,
    "tipoPagamento" "TipoPagamento" NOT NULL,
    "confirmacaoPagamento" BOOLEAN NOT NULL DEFAULT false,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pagamento_pkey" PRIMARY KEY ("id")
);
