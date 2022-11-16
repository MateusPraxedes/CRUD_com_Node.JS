"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoriesService = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
class GetAllCategoriesService {
    async execute() {
        const repo = (0, typeorm_1.getRepository)(Category_1.Category);
        // SELECT * FROM categories
        const categories = await repo.find();
        return categories;
    }
}
exports.GetAllCategoriesService = GetAllCategoriesService;
