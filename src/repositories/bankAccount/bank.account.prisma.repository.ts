import { Injectable } from '@nestjs/common';
import { BankAccountRepository } from './bank.account.repository';
import { PrismaService } from 'src/database/prisma.service';
import { Bank_Account, BankAccountType } from '@prisma/client';

@Injectable()
export class PrismaBankAccountRepository implements BankAccountRepository {
  constructor(private prisma: PrismaService) {}
  getAllBankAccountsUser(user_id: string): Promise<Bank_Account[]> {
    return this.prisma.bank_Account.findMany({ where: { user_id } });
  }

  getBankAccountById(id: string): Promise<Bank_Account> {
    return this.prisma.bank_Account.findUnique({ where: { id } });
  }

  createBankAccount(
    name: string,
    type: BankAccountType,
    bank: string,
    initial_value: number,
    user_id: string,
  ): Promise<Bank_Account> {
    return this.prisma.bank_Account.create({
      data: { name, type, bank, initial_value, user_id },
    });
  }

  updateBankAccount(
    id: string,
    name: string,
    type: BankAccountType,
    bank: string,
    initial_value: number,
  ): Promise<Bank_Account> {
    return this.prisma.bank_Account.update({
      where: { id },
      data: { name, type, bank, initial_value },
    });
  }

  deleteBankAccount(id: string): Promise<Bank_Account> {
    return this.prisma.bank_Account.delete({ where: { id } });
  }
}
