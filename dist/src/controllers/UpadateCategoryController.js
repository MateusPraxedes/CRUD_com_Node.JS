"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryController = void 0;
const UpdateCategoryService_1 = require("../services/UpdateCategoryService");
class UpdateCategoryController {
    async handle(request, response) {
        const { id } = request.params;
        const { name, description } = request.body;
        const service = new UpdateCategoryService_1.UpdateCategoryService();
        const result = await service.execute({ id, name, description });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.UpdateCategoryController = UpdateCategoryController;
