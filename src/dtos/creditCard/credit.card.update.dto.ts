import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDecimal, IsString, Length } from 'class-validator';

export class CreditCardUpdateDTO {
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
}
