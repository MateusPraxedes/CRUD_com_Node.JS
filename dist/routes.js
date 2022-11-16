"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const CreateCategoryController_1 = require("./src/controllers/CreateCategoryController");
const CreateVideoController_1 = require("./src/controllers/CreateVideoController");
const DeleteCategoryController_1 = require("./src/controllers/DeleteCategoryController");
const GetAllCategoriesController_1 = require("./src/controllers/GetAllCategoriesController");
const GetAllVideosController_1 = require("./src/controllers/GetAllVideosController");
const UpadateCategoryController_1 = require("./src/controllers/UpadateCategoryController");
const routes = (0, express_1.Router)();
exports.routes = routes;
/// CRUD - Create, Read, Update, Delete
routes.post("/categories", new CreateCategoryController_1.CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController_1.GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController_1.DeleteCategoryController().handle);
routes.put("/categories/:id", new UpadateCategoryController_1.UpdateCategoryController().handle);
routes.post("/videos", new CreateVideoController_1.CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController_1.GetAllVideosController().handle);
