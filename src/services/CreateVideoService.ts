import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
}


export class CreateVideoService {
  async execute({ name, description, duration, category_id }: VideoRequest): Promise<Error | Video> {
    
    const repo = getRepository(Video);
  
    const categoryRepo = getRepository(Category);

    
    if(!(await categoryRepo.findOne(category_id))){
      return new Error("Category not found");
    }

    const video = repo.create({ name, description, duration, category_id });   

    await repo.save(video);

    return video;



  }

}