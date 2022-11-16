"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVideos1668536081270 = void 0;
const typeorm_1 = require("typeorm");
class CreateVideos1668536081270 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "videos",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "category_id",
                    type: "uuid"
                },
                {
                    name: "duration",
                    type: "numeric"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "fk_videos_category",
                    columnNames: ["category_id"],
                    referencedTableName: "categories",
                    referencedColumnNames: ["id"],
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("videos");
    }
}
exports.CreateVideos1668536081270 = CreateVideos1668536081270;
