import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BankAccountService } from 'src/services/bank.account.service';

@ApiTags('BankAccount')
@Controller('bankAccount')
export class BankAccountController {
  constructor(private bankAccountService: BankAccountService) {}
}
