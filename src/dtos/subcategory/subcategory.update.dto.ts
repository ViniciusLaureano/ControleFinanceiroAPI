import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class SubcategoryUpdateDTO {
  @ApiProperty({
    description: 'New subcategory name',
    example: 'Subcategory 1',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Allocation Id (UUID)',
    example: 'c60d812a-68fc-488f-9c92-1b908a874b9a',
  })
  @Length(32)
  @IsString()
  allocation_id: string;
}
