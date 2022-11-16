"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
class CreateCategoryService {
    async execute({ name, description }) {
        const repo = (0, typeorm_1.getRepository)(Category_1.Category);
        // SELECT * FROM categories WHERE name = 'name' LIMIT 1 (FIND ONE)
        if (await repo.findOne({ name })) {
            return new Error("Category already exists");
        }
        const category = repo.create({
            name,
            description
        });
        await repo.save(category);
        return category;
    }
}
exports.CreateCategoryService = CreateCategoryService;
