import dotenv from "dotenv";
import assert from "assert";

// INFO: we can use this to load the different env files based on the environment like dev, prod, test
// if (process.env.NODE_ENV === "production") {
//   dotenv.config({ path: ".env" });
// }
// Let's keep it simple for the moment
dotenv.config({ path: ".env" });

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_LOGGING,
  PORT,
  JWT_SECRET,
  JWT_EXPIRES_IN,
} = process.env;

assert(DB_HOST, "DB_HOST (database host) is required");
assert(DB_PORT, "DB_PORT (database port) is required");
assert(DB_USER, "DB_USER (database user) is required");
assert(DB_PASS, "DB_PASS (database password) is required");
assert(DB_NAME, "DB_NAME (database name) is required");
assert(DB_LOGGING, "DB_NAME (database LOGGING) is required");

assert(JWT_SECRET, "JWT_SECRET is required");
assert(JWT_EXPIRES_IN, "JWT_EXPIRES_IN is required");
assert(PORT, "PORT is required");

export const config = {
  SQL: {
    DB_HOST: DB_HOST as string,
    DB_PORT: DB_PORT as string,
    DB_USER: DB_USER as string,
    DB_PASS: DB_PASS as string,
    DB_NAME: DB_NAME as string,
    DB_LOGGING: DB_LOGGING as string,
  },
  PORT: PORT as string,
  JWT_SECRET: JWT_SECRET as string,
  JWT_EXPIRES_IN: JWT_EXPIRES_IN as string,
};
