import { Injectable } from '@nestjs/common';
import { BankAccountRepository } from 'src/repositories/bankAccount/bank.account.repository';

@Injectable()
export class BankAccountService {
  constructor(private bankAccountRepository: BankAccountRepository) {}
}
