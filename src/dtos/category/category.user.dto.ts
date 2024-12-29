import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class CategoryUserDTO {
  @Length(32)
  @ApiProperty({
    description: 'User Id',
    example: '1c250765-d91b-4047-9f85-5c32b195a63e',
  })
  userId: string;
}
