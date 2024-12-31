import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Subcategory } from '@prisma/client';
import { SubcategoryCreateDTO } from 'src/dtos/subcategory/subcategory.create.dto';
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

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getSubcategoryById(@Param('id') id: string): Promise<Subcategory> {
    return this.subcategoryService.getSubcategoryById(id);
  }

  @Post('')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  createSubcategory(@Body() body: SubcategoryCreateDTO): Promise<Subcategory> {
    return this.subcategoryService.createSubcategory(body);
  }
}
