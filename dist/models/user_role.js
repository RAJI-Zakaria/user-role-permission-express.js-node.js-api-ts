"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_role = void 0;
const sequelize_1 = require("sequelize");
class user_role extends sequelize_1.Model {
    static initModel(sequelize) {
        return user_role.init({
            user_id: {
                type: sequelize_1.DataTypes.STRING(32),
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "user",
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
            end_at: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
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
            underscored: true,
            tableName: "user_role",
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "user_id" }, { name: "role_id" }],
                },
                {
                    name: "user_role_role",
                    using: "BTREE",
                    fields: [{ name: "role_id" }],
                },
            ],
        });
    }
}
exports.user_role = user_role;
