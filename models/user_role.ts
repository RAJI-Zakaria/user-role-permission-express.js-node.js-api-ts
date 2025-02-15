import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { role, roleId } from './role';
import type { user, userId } from './user';

export interface user_roleAttributes {
  user_id: string;
  role_id: number;
  end_at?: number;
  created_at: Date;
  updated_at: Date;
}

export type user_rolePk = "user_id" | "role_id";
export type user_roleId = user_role[user_rolePk];
export type user_roleOptionalAttributes = "end_at" | "created_at" | "updated_at";
export type user_roleCreationAttributes = Optional<user_roleAttributes, user_roleOptionalAttributes>;

export class user_role extends Model<user_roleAttributes, user_roleCreationAttributes> implements user_roleAttributes {
  user_id!: string;
  role_id!: number;
  end_at?: number;
  created_at!: Date;
  updated_at!: Date;

  // user_role belongsTo role via role_id
  role!: role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<role, roleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<role>;
  // user_role belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_role {
    return user_role.init({
    user_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'role',
        key: 'id'
      }
    },
    end_at: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_role',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "user_role_role",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
