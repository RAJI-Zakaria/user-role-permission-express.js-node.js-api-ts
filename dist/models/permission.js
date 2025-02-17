"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permission = void 0;
const sequelize_1 = require("sequelize");
class permission extends sequelize_1.Model {
    static initModel(sequelize) {
        return permission.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false,
                unique: "permission_title",
            },
            created_at: "",
            updated_at: "",
        }, {
            sequelize,
            tableName: "permission",
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "permission_title",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "title" }],
                },
            ],
        });
    }
}
exports.permission = permission;
