import { Module } from '@nestjs/common';
import { TransactionMethodController } from 'src/controllers/transaction.method.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaTransactionMethodRepository } from 'src/repositories/transactionMethod/transaction_method.prisma.repository';
import { TransactionMethodRepository } from 'src/repositories/transactionMethod/transaction_method.repository';
import { TransactionMethodService } from 'src/services/transaction.method.service';

@Module({
  controllers: [TransactionMethodController],
  providers: [
    PrismaService,
    TransactionMethodService,
    {
      provide: TransactionMethodRepository,
      useClass: PrismaTransactionMethodRepository,
    },
  ],
})
export class TransactionMethodModule {}
