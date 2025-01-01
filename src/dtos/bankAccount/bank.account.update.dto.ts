import { ApiProperty } from '@nestjs/swagger';
import { BankAccountType } from '@prisma/client';
import { IsDecimal, IsEnum, IsString } from 'class-validator';

export class BankAccountUpdateDTO {
  @ApiProperty({
    description: 'Bank account name',
    example: 'Account Example',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Bank Account type',
    example: BankAccountType.Conta_Corrente,
  })
  @IsEnum(BankAccountType, {
    message: 'Invalid bank account type.',
  })
  type: BankAccountType;

  @ApiProperty({
    description: 'Bank name',
    example: 'Banco do Brasil S.A.',
  })
  @IsString()
  bank: string;

  @ApiProperty({
    description: 'Category Id (UUID)',
    example: '10000',
  })
  @IsDecimal()
  initial_value: number;
}
