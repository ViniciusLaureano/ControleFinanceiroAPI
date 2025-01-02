import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class TransactionMethodCreateDTO {
  @ApiProperty({
    description: 'Transaction method name',
    example: 'Método de Exemplo',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Bank Account Id (UUID)',
    example: '873e89d2-34d7-4e2b-9345-dbbd7d57dc54',
  })
  @Length(32)
  @IsString()
  bank_account_id: string;
}
