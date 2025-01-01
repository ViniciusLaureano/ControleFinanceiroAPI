import { ApiProperty } from '@nestjs/swagger';
import { BankAccountType } from '@prisma/client';
import { IsDecimal, IsEnum, IsString, Length } from 'class-validator';

export class BankAccountCreateDTO {
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

  @ApiProperty({
    description: 'User Id (UUID)',
    example: '873e89d2-34d7-4e2b-9345-dbbd7d57dc54',
  })
  @Length(32)
  @IsString()
  user_id: string;
}
