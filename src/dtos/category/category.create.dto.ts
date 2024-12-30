import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CategoryInOut } from '@prisma/client';
import { IsEnum, IsString, Length } from 'class-validator';

export class CategoryCreateDTO {
  @ApiProperty({
    description: 'Category name',
    example: 'Category 1',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Category type of transaction (R for In and D for Out)',
    example: CategoryInOut.D,
    default: CategoryInOut.R,
    enum: CategoryInOut,
  })
  @IsEnum(CategoryInOut, {
    message: 'Permission must be either "basic" or "complete".',
  })
  in_out: CategoryInOut;

  @ApiProperty({
    description: 'User Id (UUID)',
    example: '72b889f8-d57e-4fe3-9642-b7872c74cdf8',
  })
  @Length(32)
  @IsString()
  user_id: string;
}
