"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryService = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
class DeleteCategoryService {
    async execute(id) {
        const repo = (0, typeorm_1.getRepository)(Category_1.Category);
        // SELECT * FROM categories WHERE id = 'id' LIMIT 1 (FIND ONE)
        if (!await repo.findOne(id)) {
            return new Error("Category not found");
        }
        await repo.delete(id);
    }
}
exports.DeleteCategoryService = DeleteCategoryService;
