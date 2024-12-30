import { HttpException, Injectable } from '@nestjs/common';
import { Category, CategoryInOut } from '@prisma/client';
import { CategoryCreateDTO } from 'src/dtos/category/category.create.dto';
import { CategoryRepository } from 'src/repositories/category/category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  getActivatesCategories(userId: string): Promise<Category[]> {
    try {
      return this.categoryRepository.getActivatesCategories(userId);
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
      return this.desactivateCategory(id);
    }
  }

  private desactivateCategory(id: string): Promise<Category> {
    try {
      return this.categoryRepository.desactivateCategory(id);
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

  async createCategory(data: CategoryCreateDTO): Promise<Category> {
    const { name, in_out, user_id } = data;
    const allUserCategories = (await this.getCategories(user_id)).filter(
      (category) => category.name === name,
    );
    try {
      if (allUserCategories.length == 1)
        return this.categoryRepository.activateCategory(
          allUserCategories[0].id,
        );
      else return this.categoryRepository.createCategory(name, in_out, user_id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  getTotalActivesCategories(user_id: string): Promise<number> {
    try {
      return this.categoryRepository.getTotalActivesCategories(user_id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  private getCategories(userId: string): Promise<Category[]> {
    try {
      return this.categoryRepository.getCategories(userId);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }
}
