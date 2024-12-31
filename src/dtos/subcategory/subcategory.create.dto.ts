import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class SubcategoryCreateDTO {
  @ApiProperty({
    description: 'Subcategory name',
    example: 'Subcategory 1',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Category Id (UUID)',
    example: '25be4ca1-d8e3-4ff9-a48f-796bc8f02fc8',
  })
  @Length(32)
  @IsString()
  category_id: string;

  @ApiProperty({
    description: 'Allocation Id (UUID)',
    example: 'c60d812a-68fc-488f-9c92-1b908a874b9a',
  })
  @Length(32)
  @IsString()
  allocation_id: string;
}
