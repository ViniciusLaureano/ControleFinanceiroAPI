import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Subcategory } from '@prisma/client';
import { SubcategoryCreateDTO } from 'src/dtos/subcategory/subcategory.create.dto';
import { SubcategoryUpdateDTO } from 'src/dtos/subcategory/subcategory.update.dto';
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

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  updateSubcategory(
    @Param('id') id: string,
    @Body() body: SubcategoryUpdateDTO,
  ): Promise<Subcategory> {
    return this.subcategoryService.updateSubcategory(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  deleteSubcategory(@Param('id') id: string): Promise<Subcategory> {
    return this.subcategoryService.deleteSubcategory(id);
  }
}
