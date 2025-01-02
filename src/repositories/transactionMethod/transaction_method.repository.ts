import { Transaction_Method } from '@prisma/client';

export abstract class TransactionMethodRepository {
  abstract getAllTransactionMethodsByBank(
    bank_account_id: string,
  ): Promise<Transaction_Method[]>;

  abstract getTransactionMethodById(id: string): Promise<Transaction_Method>;

  abstract createTransactionMethod(
    name: string,
    bank_account_id: string,
  ): Promise<Transaction_Method>;

  abstract updateTransactionMethod(
    id: string,
    name: string,
  ): Promise<Transaction_Method>;

  abstract deleteTransactionMethod(id: string): Promise<Transaction_Method>;
}
