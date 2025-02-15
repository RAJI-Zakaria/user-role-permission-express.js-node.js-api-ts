import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { role, roleId } from "./role";
import type { role_permission, role_permissionId } from "./role_permission";

export interface permissionAttributes {
  id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
}

export type permissionPk = "id";
export type permissionId = permission[permissionPk];
export type permissionOptionalAttributes = "id" | "created_at" | "updated_at";
export type permissionCreationAttributes = Optional<
  permissionAttributes,
  permissionOptionalAttributes
>;

export class permission
  extends Model<permissionAttributes, permissionCreationAttributes>
  implements permissionAttributes
{
  id!: number;
  title!: string;
  created_at!: Date;
  updated_at!: Date;

  // permission belongsToMany role via permission_id and role_id
  role_id_roles!: role[];
  getRole_id_roles!: Sequelize.BelongsToManyGetAssociationsMixin<role>;
  setRole_id_roles!: Sequelize.BelongsToManySetAssociationsMixin<role, roleId>;
  addRole_id_role!: Sequelize.BelongsToManyAddAssociationMixin<role, roleId>;
  addRole_id_roles!: Sequelize.BelongsToManyAddAssociationsMixin<role, roleId>;
  createRole_id_role!: Sequelize.BelongsToManyCreateAssociationMixin<role>;
  removeRole_id_role!: Sequelize.BelongsToManyRemoveAssociationMixin<
    role,
    roleId
  >;
  removeRole_id_roles!: Sequelize.BelongsToManyRemoveAssociationsMixin<
    role,
    roleId
  >;
  hasRole_id_role!: Sequelize.BelongsToManyHasAssociationMixin<role, roleId>;
  hasRole_id_roles!: Sequelize.BelongsToManyHasAssociationsMixin<role, roleId>;
  countRole_id_roles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // permission hasMany role_permission via permission_id
  role_permissions!: role_permission[];
  getRole_permissions!: Sequelize.HasManyGetAssociationsMixin<role_permission>;
  setRole_permissions!: Sequelize.HasManySetAssociationsMixin<
    role_permission,
    role_permissionId
  >;
  addRole_permission!: Sequelize.HasManyAddAssociationMixin<
    role_permission,
    role_permissionId
  >;
  addRole_permissions!: Sequelize.HasManyAddAssociationsMixin<
    role_permission,
    role_permissionId
  >;
  createRole_permission!: Sequelize.HasManyCreateAssociationMixin<role_permission>;
  removeRole_permission!: Sequelize.HasManyRemoveAssociationMixin<
    role_permission,
    role_permissionId
  >;
  removeRole_permissions!: Sequelize.HasManyRemoveAssociationsMixin<
    role_permission,
    role_permissionId
  >;
  hasRole_permission!: Sequelize.HasManyHasAssociationMixin<
    role_permission,
    role_permissionId
  >;
  hasRole_permissions!: Sequelize.HasManyHasAssociationsMixin<
    role_permission,
    role_permissionId
  >;
  countRole_permissions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof permission {
    return permission.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: "permission_title",
        },
        created_at: "",
        updated_at: "",
      },
      {
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
      }
    );
  }
}
