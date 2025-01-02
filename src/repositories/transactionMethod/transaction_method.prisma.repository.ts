import { Injectable } from '@nestjs/common';
import { TransactionMethodRepository } from './transaction_method.repository';
import { PrismaService } from 'src/database/prisma.service';
import { Transaction_Method } from '@prisma/client';

@Injectable()
export class PrismaTransactionMethodRepository
  implements TransactionMethodRepository
{
  constructor(private prisma: PrismaService) {}

  getAllTransactionMethodsByBank(
    bank_account_id: string,
  ): Promise<Transaction_Method[]> {
    return this.prisma.transaction_Method.findMany({
      where: { bank_account_id },
    });
  }

  getTransactionMethodById(id: string): Promise<Transaction_Method> {
    return this.prisma.transaction_Method.findUnique({ where: { id } });
  }

  createTransactionMethod(
    name: string,
    bank_account_id: string,
  ): Promise<Transaction_Method> {
    return this.prisma.transaction_Method.create({
      data: { name, bank_account_id },
    });
  }

  updateTransactionMethod(
    id: string,
    name: string,
  ): Promise<Transaction_Method> {
    return this.prisma.transaction_Method.update({
      where: { id },
      data: { name },
    });
  }

  deleteTransactionMethod(id: string): Promise<Transaction_Method> {
    return this.prisma.transaction_Method.delete({ where: { id } });
  }
}
