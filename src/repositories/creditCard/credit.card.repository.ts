import { Credit_Card } from '@prisma/client';

export abstract class CreditCardRepository {
  abstract getAllCreditCardsByBank(
    bank_account_id: string,
  ): Promise<Credit_Card[]>;

  abstract getCreditCardById(id: string): Promise<Credit_Card>;

  abstract createCreditCard(
    name: string,
    expiration_date: Date,
    limit_value: number,
    bank_account_id: string,
  ): Promise<Credit_Card>;

  abstract updateCreditCard(
    id: string,
    name: string,
    expiration_date: Date,
    limit_value: number,
  ): Promise<Credit_Card>;

  abstract deleteCreditCard(id: string): Promise<Credit_Card>;
}
