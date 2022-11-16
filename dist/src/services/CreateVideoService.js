"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVideoService = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
const Video_1 = require("../entities/Video");
class CreateVideoService {
    async execute({ name, description, duration, category_id }) {
        const repo = (0, typeorm_1.getRepository)(Video_1.Video);
        const categoryRepo = (0, typeorm_1.getRepository)(Category_1.Category);
        if (!(await categoryRepo.findOne(category_id))) {
            return new Error("Category not found");
        }
        const video = repo.create({ name, description, duration, category_id });
        await repo.save(video);
        return video;
    }
}
exports.CreateVideoService = CreateVideoService;
