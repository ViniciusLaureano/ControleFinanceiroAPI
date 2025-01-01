import { HttpException, Injectable } from '@nestjs/common';
import { Credit_Card } from '@prisma/client';
import { CreditCardCreateDTO } from 'src/dtos/creditCard/credit.card.create.dto';
import { CreditCardUpdateDTO } from 'src/dtos/creditCard/credit.card.update.dto';
import { CreditCardRepository } from 'src/repositories/creditCard/credit.card.repository';

@Injectable()
export class CreditCardService {
  constructor(private creditCardRepository: CreditCardRepository) {}

  getAllCreditCardsByBank(bank_account_id: string): Promise<Credit_Card[]> {
    try {
      return this.creditCardRepository.getAllCreditCardsByBank(bank_account_id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  getCreditCardById(id: string): Promise<Credit_Card> {
    try {
      return this.creditCardRepository.getCreditCardById(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  createCreditCard(body: CreditCardCreateDTO): Promise<Credit_Card> {
    const { name, expiration_date, limit_value, bank_account_id } = body;
    try {
      return this.creditCardRepository.createCreditCard(
        name,
        expiration_date,
        limit_value,
        bank_account_id,
      );
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  updateCreditCard(
    id: string,
    body: CreditCardUpdateDTO,
  ): Promise<Credit_Card> {
    const { name, expiration_date, limit_value } = body;
    try {
      return this.creditCardRepository.updateCreditCard(
        id,
        name,
        expiration_date,
        limit_value,
      );
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  deleteCreditCard(id: string): Promise<Credit_Card> {
    try {
      return this.creditCardRepository.deleteCreditCard(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }
}
