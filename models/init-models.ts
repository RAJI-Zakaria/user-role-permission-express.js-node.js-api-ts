import type { Sequelize } from "sequelize";
import { permission as _permission } from "./permission";
import type { permissionAttributes, permissionCreationAttributes } from "./permission";
import { role as _role } from "./role";
import type { roleAttributes, roleCreationAttributes } from "./role";
import { role_permission as _role_permission } from "./role_permission";
import type { role_permissionAttributes, role_permissionCreationAttributes } from "./role_permission";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";
import { user_role as _user_role } from "./user_role";
import type { user_roleAttributes, user_roleCreationAttributes } from "./user_role";

export {
  _permission as permission,
  _role as role,
  _role_permission as role_permission,
  _user as user,
  _user_role as user_role,
};

export type {
  permissionAttributes,
  permissionCreationAttributes,
  roleAttributes,
  roleCreationAttributes,
  role_permissionAttributes,
  role_permissionCreationAttributes,
  userAttributes,
  userCreationAttributes,
  user_roleAttributes,
  user_roleCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const permission = _permission.initModel(sequelize);
  const role = _role.initModel(sequelize);
  const role_permission = _role_permission.initModel(sequelize);
  const user = _user.initModel(sequelize);
  const user_role = _user_role.initModel(sequelize);

  permission.belongsToMany(role, { as: 'role_id_roles', through: role_permission, foreignKey: "permission_id", otherKey: "role_id" });
  role.belongsToMany(permission, { as: 'permission_id_permissions', through: role_permission, foreignKey: "role_id", otherKey: "permission_id" });
  role.belongsToMany(user, { as: 'user_id_users', through: user_role, foreignKey: "role_id", otherKey: "user_id" });
  user.belongsToMany(role, { as: 'role_id_role_user_roles', through: user_role, foreignKey: "user_id", otherKey: "role_id" });
  role_permission.belongsTo(permission, { as: "permission", foreignKey: "permission_id"});
  permission.hasMany(role_permission, { as: "role_permissions", foreignKey: "permission_id"});
  role_permission.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(role_permission, { as: "role_permissions", foreignKey: "role_id"});
  user_role.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(user_role, { as: "user_roles", foreignKey: "role_id"});
  user_role.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_role, { as: "user_roles", foreignKey: "user_id"});

  return {
    permission: permission,
    role: role,
    role_permission: role_permission,
    user: user,
    user_role: user_role,
  };
}
