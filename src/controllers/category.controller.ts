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
import { Category } from '@prisma/client';
import { CategoryCreateDTO } from 'src/dtos/category/category.create.dto';
import { CategoryUserDTO } from 'src/dtos/category/category.user.dto';
import { CategoryService } from 'src/services/category.service';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('user/:userId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getCategories(@Param('userId') userId: string): Promise<Category[]> {
    return this.categoryService.getCategories(userId);
  }

  @Get('user/:userId/total')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getTotalActivesCategories(@Param('userId') userId: string): Promise<number> {
    return this.categoryService.getTotalActivesCategories(userId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getCategoryById(@Param('id') id: string): Promise<Category> {
    return this.categoryService.getCategoryById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  deleteCategory(@Param('id') id: string): Promise<Category> {
    return this.categoryService.deleteCategory(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  editCategory(
    @Param('id') id: string,
    @Body() body: CategoryCreateDTO,
  ): Promise<Category> {
    return this.categoryService.editCategory(id, body);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth('access-token')
  createCategory(@Body() body: CategoryCreateDTO): Promise<Category> {
    return this.categoryService.createCategory(body);
  }
}
