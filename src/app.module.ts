import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PagamentoModule } from './pagamento/pagamento.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }
    ),
    PagamentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
