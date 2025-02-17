import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { role, roleId } from "./role";
import type { user_role, user_roleId } from "./user_role";

export interface userAttributes {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  avatar?: string;
  birthday?: number;
  created_at: Date;
  updated_at: Date;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes =
  | "avatar"
  | "birthday"
  | "created_at"
  | "updated_at";
export type userCreationAttributes = Optional<
  userAttributes,
  userOptionalAttributes
>;

export class user
  extends Model<userAttributes, userCreationAttributes>
  implements userAttributes
{
  id!: string;
  first_name!: string;
  last_name!: string;
  email!: string;
  password!: string;
  avatar?: string;
  birthday?: number;
  created_at!: Date;
  updated_at!: Date;

  // user belongsToMany role via user_id and role_id
  role_id_role_user_roles!: role[];
  getRole_id_role_user_roles!: Sequelize.BelongsToManyGetAssociationsMixin<role>;
  setRole_id_role_user_roles!: Sequelize.BelongsToManySetAssociationsMixin<
    role,
    roleId
  >;
  addRole_id_role_user_role!: Sequelize.BelongsToManyAddAssociationMixin<
    role,
    roleId
  >;
  addRole_id_role_user_roles!: Sequelize.BelongsToManyAddAssociationsMixin<
    role,
    roleId
  >;
  createRole_id_role_user_role!: Sequelize.BelongsToManyCreateAssociationMixin<role>;
  removeRole_id_role_user_role!: Sequelize.BelongsToManyRemoveAssociationMixin<
    role,
    roleId
  >;
  removeRole_id_role_user_roles!: Sequelize.BelongsToManyRemoveAssociationsMixin<
    role,
    roleId
  >;
  hasRole_id_role_user_role!: Sequelize.BelongsToManyHasAssociationMixin<
    role,
    roleId
  >;
  hasRole_id_role_user_roles!: Sequelize.BelongsToManyHasAssociationsMixin<
    role,
    roleId
  >;
  countRole_id_role_user_roles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user hasMany user_role via user_id
  user_roles!: user_role[];
  getUser_roles!: Sequelize.HasManyGetAssociationsMixin<user_role>;
  setUser_roles!: Sequelize.HasManySetAssociationsMixin<user_role, user_roleId>;
  addUser_role!: Sequelize.HasManyAddAssociationMixin<user_role, user_roleId>;
  addUser_roles!: Sequelize.HasManyAddAssociationsMixin<user_role, user_roleId>;
  createUser_role!: Sequelize.HasManyCreateAssociationMixin<user_role>;
  removeUser_role!: Sequelize.HasManyRemoveAssociationMixin<
    user_role,
    user_roleId
  >;
  removeUser_roles!: Sequelize.HasManyRemoveAssociationsMixin<
    user_role,
    user_roleId
  >;
  hasUser_role!: Sequelize.HasManyHasAssociationMixin<user_role, user_roleId>;
  hasUser_roles!: Sequelize.HasManyHasAssociationsMixin<user_role, user_roleId>;
  countUser_roles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init(
      {
        id: {
          type: DataTypes.STRING(32),
          allowNull: false,
          primaryKey: true,
        },
        first_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        avatar: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        birthday: {
          type: DataTypes.INTEGER,
          allowNull: true,
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
      }
    );
  }
}
