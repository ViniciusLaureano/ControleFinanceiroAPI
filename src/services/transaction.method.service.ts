import { HttpException, Injectable } from '@nestjs/common';
import { Transaction_Method } from '@prisma/client';
import { TransactionMethodCreateDTO } from 'src/dtos/transactionMethod/transaction.method.create.dto';
import { TransactionMethodUpdateDTO } from 'src/dtos/transactionMethod/transaction.method.update.dto';
import { TransactionMethodRepository } from 'src/repositories/transactionMethod/transaction_method.repository';

@Injectable()
export class TransactionMethodService {
  constructor(
    private transactionMethodRepository: TransactionMethodRepository,
  ) {}

  getAllTransactionMethodsByBank(
    bank_account_id: string,
  ): Promise<Transaction_Method[]> {
    try {
      return this.transactionMethodRepository.getAllTransactionMethodsByBank(
        bank_account_id,
      );
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  getTransactionMethodById(id: string): Promise<Transaction_Method> {
    try {
      return this.transactionMethodRepository.getTransactionMethodById(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  createTransactionMethod(
    body: TransactionMethodCreateDTO,
  ): Promise<Transaction_Method> {
    const { name, bank_account_id } = body;
    try {
      return this.transactionMethodRepository.createTransactionMethod(
        name,
        bank_account_id,
      );
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  updateTransactionMethod(
    id: string,
    body: TransactionMethodUpdateDTO,
  ): Promise<Transaction_Method> {
    try {
      return this.transactionMethodRepository.updateTransactionMethod(
        id,
        body.name,
      );
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  deleteTransactionMethod(id: string): Promise<Transaction_Method> {
    try {
      return this.transactionMethodRepository.deleteTransactionMethod(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }
}
