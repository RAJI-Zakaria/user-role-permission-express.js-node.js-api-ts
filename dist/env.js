"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const assert_1 = __importDefault(require("assert"));
// INFO: we can use this to load the different env files based on the environment like dev, prod, test
// if (process.env.NODE_ENV === "production") {
//   dotenv.config({ path: ".env" });
// }
// Let's keep it simple for the moment
dotenv_1.default.config({ path: ".env" });
const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, DB_LOGGING, PORT, JWT_SECRET, JWT_EXPIRES_IN, } = process.env;
(0, assert_1.default)(DB_HOST, "DB_HOST (database host) is required");
(0, assert_1.default)(DB_PORT, "DB_PORT (database port) is required");
(0, assert_1.default)(DB_USER, "DB_USER (database user) is required");
(0, assert_1.default)(DB_PASS, "DB_PASS (database password) is required");
(0, assert_1.default)(DB_NAME, "DB_NAME (database name) is required");
(0, assert_1.default)(DB_LOGGING, "DB_NAME (database LOGGING) is required");
(0, assert_1.default)(JWT_SECRET, "JWT_SECRET is required");
(0, assert_1.default)(JWT_EXPIRES_IN, "JWT_EXPIRES_IN is required");
(0, assert_1.default)(PORT, "PORT is required");
exports.config = {
    SQL: {
        DB_HOST: DB_HOST,
        DB_PORT: DB_PORT,
        DB_USER: DB_USER,
        DB_PASS: DB_PASS,
        DB_NAME: DB_NAME,
        DB_LOGGING: DB_LOGGING,
    },
    PORT: PORT,
    JWT_SECRET: JWT_SECRET,
    JWT_EXPIRES_IN: JWT_EXPIRES_IN,
};
