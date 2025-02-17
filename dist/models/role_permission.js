"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role_permission = void 0;
const sequelize_1 = require("sequelize");
class role_permission extends sequelize_1.Model {
    static initModel(sequelize) {
        return role_permission.init({
            permission_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "permission",
                    key: "id",
                },
            },
            role_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "role",
                    key: "id",
                },
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
            tableName: "role_permission",
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "permission_id" }, { name: "role_id" }],
                },
                {
                    name: "role_permission_role",
                    using: "BTREE",
                    fields: [{ name: "role_id" }],
                },
            ],
        });
    }
}
exports.role_permission = role_permission;
