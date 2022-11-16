"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryService = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
class UpdateCategoryService {
    async execute({ id, name, description }) {
        const repo = (0, typeorm_1.getRepository)(Category_1.Category);
        const category = await repo.findOne(id);
        if (!category) {
            return new Error("Category not found");
        }
        category.name = name ? name : category.name;
        category.description = description ? description : category.description;
        await repo.save(category);
        return category;
    }
}
exports.UpdateCategoryService = UpdateCategoryService;
