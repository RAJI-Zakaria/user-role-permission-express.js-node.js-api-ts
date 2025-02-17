"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = void 0;
const sequelize_1 = require("sequelize");
class role extends sequelize_1.Model {
    static initModel(sequelize) {
        return role.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false,
                unique: "role_title",
            },
            created_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            updated_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: "role",
            underscored: true,
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "role_title",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "title" }],
                },
            ],
        });
    }
}
exports.role = role;
