const Sequelize = require("sequelize");
const { SQL } = require("../env");
const init_models = require("../models/init-models");

const retry = {
  max: Infinity,
  match: /.*/,
};

const CONFIGURATION = {
  host: SQL.DB_HOST,
  port: SQL.DB_PORT,
  dialect: "mysql",
  define: {
    underscored: true,
    underscoredAll: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  logging: SQL.DB_LOGGING === "true" ? console.log : false,
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
  SQL.DB_NAME,
  SQL.DB_USER,
  SQL.DB_PASS,
  CONFIGURATION
);

const db = init_models(dbInstance);

db.dbInstance = dbInstance;

module.exports = db;
