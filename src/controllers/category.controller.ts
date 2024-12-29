import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Category } from '@prisma/client';
import { CategoryService } from 'src/services/category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('')
  getCategories(): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }

  @Get('total')
  getTotalActivesCategories(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }

  @Put(':id')
  editCategory(): Promise<Category> {
    throw new Error('Method not implemented.');
  }

  @Post('')
  createCategory(): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
