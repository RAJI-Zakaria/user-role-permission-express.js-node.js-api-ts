"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const sequelize_1 = require("sequelize");
class user extends sequelize_1.Model {
    static initModel(sequelize) {
        return user.init({
            id: {
                type: sequelize_1.DataTypes.STRING(32),
                allowNull: false,
                primaryKey: true,
            },
            first_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false,
            },
            last_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false,
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            password: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            avatar: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
            },
            birthday: {
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
            tableName: "user",
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
            ],
        });
    }
}
exports.user = user;
