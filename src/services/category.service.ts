import { HttpException, Injectable } from '@nestjs/common';
import { Category, CategoryInOut } from '@prisma/client';
import { CategoryCreateDTO } from 'src/dtos/category/category.create.dto';
import { CategoryRepository } from 'src/repositories/category/category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  getCategories(userId: string): Promise<Category[]> {
    try {
      return this.categoryRepository.getCategories(userId);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  getCategoryById(id: string): Promise<Category> {
    try {
      return this.categoryRepository.getCategoryById(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  deleteCategory(id: string): Promise<Category> {
    try {
      return this.categoryRepository.deleteCategory(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  editCategory(id: string, data: CategoryCreateDTO): Promise<Category> {
    const { name, in_out } = data;

    try {
      return this.categoryRepository.editCategory(id, name, in_out);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  createCategory(data: CategoryCreateDTO): Promise<Category> {
    const { name, in_out, user_id } = data;
    try {
      return this.categoryRepository.createCategory(name, in_out, user_id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  getTotalCategories(user_id: string): Promise<number> {
    try {
      return this.categoryRepository.getTotalCategories(user_id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }
}
