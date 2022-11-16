import { getRepository } from "typeorm";
import { Category } from "../entities/Category";



export class GetAllCategoriesService {
  async execute() {
    const repo = getRepository(Category);
    
    // SELECT * FROM categories
    const categories = await repo.find();


    return categories;
  }
}