"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const env_js_1 = require("../env.js");
const init_models_1 = require("../models/init-models");
const retry = {
    max: Infinity,
    match: /.*/,
};
const CONFIGURATION = {
    host: env_js_1.config.SQL.DB_HOST,
    port: parseInt(env_js_1.config.SQL.DB_PORT, 10),
    dialect: "mysql",
    define: {
        underscored: true,
        underscoredAll: true,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    logging: env_js_1.config.SQL.DB_LOGGING === "true" ? console.log : false,
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
const dbInstance = new sequelize_1.Sequelize(env_js_1.config.SQL.DB_NAME, env_js_1.config.SQL.DB_USER, env_js_1.config.SQL.DB_PASS, CONFIGURATION);
const dbModels = (0, init_models_1.initModels)(dbInstance);
exports.default = { dbModels, dbInstance };
