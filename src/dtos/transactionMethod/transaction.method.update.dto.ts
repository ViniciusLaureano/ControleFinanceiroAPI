import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDecimal, IsString, Length } from 'class-validator';

export class TransactionMethodUpdateDTO {
  @ApiProperty({
    description: 'New transaction method name',
    example: 'Método de Exemplo 2',
  })
  @IsString()
  name: string;
}
