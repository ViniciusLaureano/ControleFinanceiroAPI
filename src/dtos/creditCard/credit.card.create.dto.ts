import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDecimal, IsString, Length } from 'class-validator';

export class CreditCardCreateDTO {
  @ApiProperty({
    description: 'Credti card name',
    example: 'Credit Card Example',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Expiration date',
    example: '2020-04-16',
  })
  @IsDate()
  expiration_date: Date;

  @ApiProperty({
    description: 'Limit value of credit card',
    example: '"10000"',
  })
  @IsDecimal()
  limit_value: number;

  @ApiProperty({
    description: 'Bank Account Id (UUID)',
    example: '873e89d2-34d7-4e2b-9345-dbbd7d57dc54',
  })
  @Length(32)
  @IsString()
  bank_account_id: string;
}
