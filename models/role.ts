import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { permission, permissionId } from './permission';
import type { role_permission, role_permissionId } from './role_permission';
import type { user, userId } from './user';
import type { user_role, user_roleId } from './user_role';

export interface roleAttributes {
  id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
}

export type rolePk = "id";
export type roleId = role[rolePk];
export type roleOptionalAttributes = "id" | "created_at" | "updated_at";
export type roleCreationAttributes = Optional<roleAttributes, roleOptionalAttributes>;

export class role extends Model<roleAttributes, roleCreationAttributes> implements roleAttributes {
  id!: number;
  title!: string;
  created_at!: Date;
  updated_at!: Date;

  // role belongsToMany permission via role_id and permission_id
  permission_id_permissions!: permission[];
  getPermission_id_permissions!: Sequelize.BelongsToManyGetAssociationsMixin<permission>;
  setPermission_id_permissions!: Sequelize.BelongsToManySetAssociationsMixin<permission, permissionId>;
  addPermission_id_permission!: Sequelize.BelongsToManyAddAssociationMixin<permission, permissionId>;
  addPermission_id_permissions!: Sequelize.BelongsToManyAddAssociationsMixin<permission, permissionId>;
  createPermission_id_permission!: Sequelize.BelongsToManyCreateAssociationMixin<permission>;
  removePermission_id_permission!: Sequelize.BelongsToManyRemoveAssociationMixin<permission, permissionId>;
  removePermission_id_permissions!: Sequelize.BelongsToManyRemoveAssociationsMixin<permission, permissionId>;
  hasPermission_id_permission!: Sequelize.BelongsToManyHasAssociationMixin<permission, permissionId>;
  hasPermission_id_permissions!: Sequelize.BelongsToManyHasAssociationsMixin<permission, permissionId>;
  countPermission_id_permissions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // role hasMany role_permission via role_id
  role_permissions!: role_permission[];
  getRole_permissions!: Sequelize.HasManyGetAssociationsMixin<role_permission>;
  setRole_permissions!: Sequelize.HasManySetAssociationsMixin<role_permission, role_permissionId>;
  addRole_permission!: Sequelize.HasManyAddAssociationMixin<role_permission, role_permissionId>;
  addRole_permissions!: Sequelize.HasManyAddAssociationsMixin<role_permission, role_permissionId>;
  createRole_permission!: Sequelize.HasManyCreateAssociationMixin<role_permission>;
  removeRole_permission!: Sequelize.HasManyRemoveAssociationMixin<role_permission, role_permissionId>;
  removeRole_permissions!: Sequelize.HasManyRemoveAssociationsMixin<role_permission, role_permissionId>;
  hasRole_permission!: Sequelize.HasManyHasAssociationMixin<role_permission, role_permissionId>;
  hasRole_permissions!: Sequelize.HasManyHasAssociationsMixin<role_permission, role_permissionId>;
  countRole_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // role belongsToMany user via role_id and user_id
  user_id_users!: user[];
  getUser_id_users!: Sequelize.BelongsToManyGetAssociationsMixin<user>;
  setUser_id_users!: Sequelize.BelongsToManySetAssociationsMixin<user, userId>;
  addUser_id_user!: Sequelize.BelongsToManyAddAssociationMixin<user, userId>;
  addUser_id_users!: Sequelize.BelongsToManyAddAssociationsMixin<user, userId>;
  createUser_id_user!: Sequelize.BelongsToManyCreateAssociationMixin<user>;
  removeUser_id_user!: Sequelize.BelongsToManyRemoveAssociationMixin<user, userId>;
  removeUser_id_users!: Sequelize.BelongsToManyRemoveAssociationsMixin<user, userId>;
  hasUser_id_user!: Sequelize.BelongsToManyHasAssociationMixin<user, userId>;
  hasUser_id_users!: Sequelize.BelongsToManyHasAssociationsMixin<user, userId>;
  countUser_id_users!: Sequelize.BelongsToManyCountAssociationsMixin;
  // role hasMany user_role via role_id
  user_roles!: user_role[];
  getUser_roles!: Sequelize.HasManyGetAssociationsMixin<user_role>;
  setUser_roles!: Sequelize.HasManySetAssociationsMixin<user_role, user_roleId>;
  addUser_role!: Sequelize.HasManyAddAssociationMixin<user_role, user_roleId>;
  addUser_roles!: Sequelize.HasManyAddAssociationsMixin<user_role, user_roleId>;
  createUser_role!: Sequelize.HasManyCreateAssociationMixin<user_role>;
  removeUser_role!: Sequelize.HasManyRemoveAssociationMixin<user_role, user_roleId>;
  removeUser_roles!: Sequelize.HasManyRemoveAssociationsMixin<user_role, user_roleId>;
  hasUser_role!: Sequelize.HasManyHasAssociationMixin<user_role, user_roleId>;
  hasUser_roles!: Sequelize.HasManyHasAssociationsMixin<user_role, user_roleId>;
  countUser_roles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof role {
    return role.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "role_title"
    }
  }, {
    sequelize,
    tableName: 'role',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "role_title",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
  }
}
