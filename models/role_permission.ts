import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { permission, permissionId } from "./permission";
import type { role, roleId } from "./role";

export interface role_permissionAttributes {
  permission_id: number;
  role_id: number;
  created_at: Date;
  updated_at: Date;
}

export type role_permissionPk = "permission_id" | "role_id";
export type role_permissionId = role_permission[role_permissionPk];
export type role_permissionOptionalAttributes = "created_at" | "updated_at";
export type role_permissionCreationAttributes = Optional<
  role_permissionAttributes,
  role_permissionOptionalAttributes
>;

export class role_permission
  extends Model<role_permissionAttributes, role_permissionCreationAttributes>
  implements role_permissionAttributes
{
  permission_id!: number;
  role_id!: number;
  created_at!: Date;
  updated_at!: Date;

  // role_permission belongsTo permission via permission_id
  permission!: permission;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<permission>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<
    permission,
    permissionId
  >;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<permission>;
  // role_permission belongsTo role via role_id
  role!: role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<role, roleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role_permission {
    return role_permission.init(
      {
        permission_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "permission",
            key: "id",
          },
        },
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "role",
            key: "id",
          },
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
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
      }
    );
  }
}
