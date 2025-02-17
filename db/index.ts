import { Options, Sequelize } from "sequelize";
import { config } from "../env";

import { initModels as init_models } from "../models/init-models";

const retry = {
  max: Infinity,
  match: /.*/,
};

const CONFIGURATION: Options = {
  host: config.SQL.DB_HOST,
  port: parseInt(config.SQL.DB_PORT, 10),
  dialect: "mysql",
  define: {
    underscored: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  logging: config.SQL.DB_LOGGING === "true" ? console.log : false,
  // timezone:  "+02:00",
  timezone: "+01:00",
  pool: {
    max: 10,
    min: 3,
    acquire: 30000,
    idle: 10000,
  },
  retry,
};

const dbInstance = new Sequelize(
  config.SQL.DB_NAME,
  config.SQL.DB_USER,
  config.SQL.DB_PASS,
  CONFIGURATION
);

const dbModels = init_models(dbInstance);

export default { dbModels, dbInstance };
