import { Category, CategoryInOut } from '@prisma/client';

export abstract class CategoryRepository {
  abstract getCategories(user_id: string): Promise<Category[]>;

  abstract getCategoryById(id: string): Promise<Category>;

  abstract deleteCategory(id: string): Promise<Category>;

  abstract desactivateCategory(id: string): Promise<Category>;

  abstract editCategory(
    id: string,
    name: string,
    in_out: CategoryInOut,
  ): Promise<Category>;

  abstract createCategory(
    name: string,
    in_out: CategoryInOut,
    user_id: string,
  ): Promise<Category>;

  abstract getTotalActivesCategories(user_id: string): Promise<number>;
}
