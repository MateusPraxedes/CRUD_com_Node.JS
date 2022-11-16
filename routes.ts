import { Router } from "express";
import { CreateCategoryController } from "./src/controllers/CreateCategoryController";
import { CreateVideoController } from "./src/controllers/CreateVideoController";
import { DeleteCategoryController } from "./src/controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./src/controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./src/controllers/GetAllVideosController";
import { UpdateCategoryController } from "./src/controllers/UpadateCategoryController";

const routes = Router();


/// CRUD - Create, Read, Update, Delete

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);


routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);


export { routes }; 