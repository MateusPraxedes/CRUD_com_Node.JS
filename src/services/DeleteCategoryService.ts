import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


export class DeleteCategoryService {
  async execute(id: string) {
    
    const repo = getRepository(Category)
    
    // SELECT * FROM categories WHERE id = 'id' LIMIT 1 (FIND ONE)
    if(!await repo.findOne(id)){
      return new Error("Category not found");
    }
    	

    await repo.delete(id);

  }}