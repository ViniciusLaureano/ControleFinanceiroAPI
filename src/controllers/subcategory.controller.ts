import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Subcategory } from '@prisma/client';
import { SubcategoryService } from 'src/services/subcategory.service';

@ApiTags('Subcategory')
@Controller('subcategory')
export class SubcategoryController {
  constructor(private subcategoryService: SubcategoryService) {}

  @Get('category/:categoryId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getSubcategoryByCategory(
    @Param('categoryId') categoryId: string,
  ): Promise<Subcategory[]> {
    return this.subcategoryService.getSubcategoryByCategory(categoryId);
  }
}
