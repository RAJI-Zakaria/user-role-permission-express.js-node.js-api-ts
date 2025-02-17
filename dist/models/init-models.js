"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_role = exports.user = exports.role_permission = exports.role = exports.permission = void 0;
exports.initModels = initModels;
const permission_1 = require("./permission");
Object.defineProperty(exports, "permission", { enumerable: true, get: function () { return permission_1.permission; } });
const role_1 = require("./role");
Object.defineProperty(exports, "role", { enumerable: true, get: function () { return role_1.role; } });
const role_permission_1 = require("./role_permission");
Object.defineProperty(exports, "role_permission", { enumerable: true, get: function () { return role_permission_1.role_permission; } });
const user_1 = require("./user");
Object.defineProperty(exports, "user", { enumerable: true, get: function () { return user_1.user; } });
const user_role_1 = require("./user_role");
Object.defineProperty(exports, "user_role", { enumerable: true, get: function () { return user_role_1.user_role; } });
function initModels(sequelize) {
    const permission = permission_1.permission.initModel(sequelize);
    const role = role_1.role.initModel(sequelize);
    const role_permission = role_permission_1.role_permission.initModel(sequelize);
    const user = user_1.user.initModel(sequelize);
    const user_role = user_role_1.user_role.initModel(sequelize);
    permission.belongsToMany(role, {
        as: "role_id_roles",
        through: role_permission,
        foreignKey: "permission_id",
        otherKey: "role_id",
    });
    role.belongsToMany(permission, {
        as: "permission_id_permissions",
        through: role_permission,
        foreignKey: "role_id",
        otherKey: "permission_id",
    });
    role.belongsToMany(user, {
        as: "user_id_users",
        through: user_role,
        foreignKey: "role_id",
        otherKey: "user_id",
    });
    user.belongsToMany(role, {
        as: "role_id_role_user_roles",
        through: user_role,
        foreignKey: "user_id",
        otherKey: "role_id",
    });
    role_permission.belongsTo(permission, {
        as: "permission",
        foreignKey: "permission_id",
    });
    permission.hasMany(role_permission, {
        as: "role_permissions",
        foreignKey: "permission_id",
    });
    role_permission.belongsTo(role, { as: "role", foreignKey: "role_id" });
    role.hasMany(role_permission, {
        as: "role_permissions",
        foreignKey: "role_id",
    });
    user_role.belongsTo(role, { as: "role", foreignKey: "role_id" });
    role.hasMany(user_role, { as: "user_roles", foreignKey: "role_id" });
    user_role.belongsTo(user, { as: "user", foreignKey: "user_id" });
    user.hasMany(user_role, { as: "user_roles", foreignKey: "user_id" });
    return {
        permission: permission,
        role: role,
        role_permission: role_permission,
        user: user,
        user_role: user_role,
    };
}
