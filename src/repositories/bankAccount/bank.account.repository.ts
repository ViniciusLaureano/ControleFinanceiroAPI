import { Bank_Account, BankAccountType } from '@prisma/client';

export abstract class BankAccountRepository {
  abstract getAllBankAccountsUser(user_id: string): Promise<Bank_Account[]>;

  abstract getBankAccountById(id: string): Promise<Bank_Account>;

  abstract createBankAccount(
    name: string,
    type: BankAccountType,
    bank: string,
    initial_value: number,
    user_id: string,
  ): Promise<Bank_Account>;

  abstract updateBankAccount(
    id: string,
    name: string,
    type: BankAccountType,
    bank: string,
    initial_value: number,
  ): Promise<Bank_Account>;

  abstract deleteBankAccount(id: string): Promise<Bank_Account>;
}
