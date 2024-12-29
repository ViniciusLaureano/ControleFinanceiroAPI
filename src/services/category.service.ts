import { Injectable } from '@nestjs/common';
import { Category, CategoryInOut } from '@prisma/client';
import { CategoryCreateDTO } from 'src/dtos/category/category.create.dto';
import { CategoryRepository } from 'src/repositories/category/category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  getCategories(user_id: string): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
  getCategoryById(id: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  deleteCategory(id: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  desactivateCategory(id: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  editCategory(id: string, body: CategoryCreateDTO): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  createCategory(data: CategoryCreateDTO): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  getTotalActivesCategories(user_id: string): Promise<number> {
    throw new Error('Method not implemented.');
  }
}
