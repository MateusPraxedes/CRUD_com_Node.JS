"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const CreateCategoryService_1 = require("../services/CreateCategoryService");
class CreateCategoryController {
    async handle(request, response) {
        const { name, description } = request.body;
        const service = new CreateCategoryService_1.CreateCategoryService();
        const result = await service.execute({ name, description });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreateCategoryController = CreateCategoryController;
