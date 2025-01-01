import { HttpException, Injectable } from '@nestjs/common';
import { Bank_Account, BankAccountType } from '@prisma/client';
import { BankAccountCreateDTO } from 'src/dtos/bankAccount/bank.account.create.dto';
import { BankAccountUpdateDTO } from 'src/dtos/bankAccount/bank.account.update.dto';
import { BankAccountRepository } from 'src/repositories/bankAccount/bank.account.repository';

@Injectable()
export class BankAccountService {
  constructor(private bankAccountRepository: BankAccountRepository) {}

  getAllBankAccountsUser(user_id: string): Promise<Bank_Account[]> {
    try {
      return this.bankAccountRepository.getAllBankAccountsUser(user_id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  getBankAccountById(id: string): Promise<Bank_Account> {
    try {
      return this.bankAccountRepository.getBankAccountById(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  createBankAccount(body: BankAccountCreateDTO): Promise<Bank_Account> {
    const { name, type, bank, initial_value, user_id } = body;

    try {
      return this.bankAccountRepository.createBankAccount(
        name,
        type,
        bank,
        initial_value,
        user_id,
      );
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  updateBankAccount(
    id: string,
    body: BankAccountUpdateDTO,
  ): Promise<Bank_Account> {
    const { name, type, bank, initial_value } = body;

    try {
      return this.bankAccountRepository.updateBankAccount(
        id,
        name,
        type,
        bank,
        initial_value,
      );
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  deleteBankAccount(id: string): Promise<Bank_Account> {
    try {
      return this.bankAccountRepository.deleteBankAccount(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }
}
