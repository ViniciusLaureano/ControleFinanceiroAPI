import { Injectable } from '@nestjs/common';
import { BankAccountRepository } from './bank.account.repository';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaBankAccountRepository implements BankAccountRepository {
  constructor(private prisma: PrismaService) {}
}
