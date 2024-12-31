import { Injectable } from '@nestjs/common';
import { SubcategoryRepository } from './subcategory.repository';

@Injectable()
export class PrismaSubcategoryRepository implements SubcategoryRepository {}
