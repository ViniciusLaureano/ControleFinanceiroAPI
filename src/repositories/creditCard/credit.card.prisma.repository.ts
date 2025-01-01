import { PrismaService } from 'src/database/prisma.service';
import { CreditCardRepository } from './credit.card.repository';
import { Credit_Card } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCreditCardRepository implements CreditCardRepository {
  constructor(private prisma: PrismaService) {}

  getAllCreditCardsByBank(bank_account_id: string): Promise<Credit_Card[]> {
    return this.prisma.credit_Card.findMany({ where: { bank_account_id } });
  }

  getCreditCardById(id: string): Promise<Credit_Card> {
    return this.prisma.credit_Card.findUnique({ where: { id } });
  }

  createCreditCard(
    name: string,
    expiration_date: Date,
    limit_value: number,
    bank_account_id: string,
  ): Promise<Credit_Card> {
    return this.prisma.credit_Card.create({
      data: { name, expiration_date, limit_value, bank_account_id },
    });
  }

  updateCreditCard(
    id: string,
    name: string,
    expiration_date: Date,
    limit_value: number,
  ): Promise<Credit_Card> {
    return this.prisma.credit_Card.update({
      where: { id },
      data: { name, expiration_date, limit_value },
    });
  }

  deleteCreditCard(id: string): Promise<Credit_Card> {
    return this.prisma.credit_Card.delete({ where: { id } });
  }
}
