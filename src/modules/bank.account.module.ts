import { Module } from '@nestjs/common';
import { BankAccountController } from 'src/controllers/bank.account.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaBankAccountRepository } from 'src/repositories/bankAccount/bank.account.prisma.repository';
import { BankAccountRepository } from 'src/repositories/bankAccount/bank.account.repository';
import { BankAccountService } from 'src/services/bank.account.service';

@Module({
  controllers: [BankAccountController],
  providers: [
    PrismaService,
    BankAccountService,
    {
      provide: BankAccountRepository,
      useClass: PrismaBankAccountRepository,
    },
  ],
})
export class BankAccountModule {}
