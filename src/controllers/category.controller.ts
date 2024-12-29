import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Category } from '@prisma/client';
import { CategoryCreateDTO } from 'src/dtos/category/category.create.dto';
import { CategoryUserDTO } from 'src/dtos/category/category.user.dto';
import { CategoryService } from 'src/services/category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('')
  getCategories(@Body() categoryUserDTO: CategoryUserDTO): Promise<Category[]> {
    return this.categoryService.getCategories(categoryUserDTO.userId);
  }

  @Get('total')
  getTotalActivesCategories(
    @Body() categoryUserDTO: CategoryUserDTO,
  ): Promise<number> {
    return this.categoryService.getTotalActivesCategories(
      categoryUserDTO.userId,
    );
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string): Promise<Category> {
    return this.categoryService.getCategoryById(id);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string): Promise<Category> {
    return this.categoryService.deleteCategory(id);
  }

  @Put(':id')
  editCategory(
    @Param('id') id: string,
    @Body() body: CategoryCreateDTO,
  ): Promise<Category> {
    return this.categoryService.editCategory(id, body);
  }

  @Post('')
  createCategory(@Body() body: CategoryCreateDTO): Promise<Category> {
    return this.categoryService.createCategory(body);
  }
}
