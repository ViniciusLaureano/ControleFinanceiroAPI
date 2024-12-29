import { CategoryInOut } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CategoryCreateDTO {
  @IsString()
  name: string;

  @IsEnum(CategoryInOut, {
    message: 'Permission must be either "basic" or "complete".',
  })
  in_out: CategoryInOut;
  user_id: string;
}
