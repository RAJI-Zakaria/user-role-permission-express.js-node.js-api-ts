"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const setupDatabase = () => {
    const { dbInstance } = index_1.default;
    dbInstance
        .sync() //{ alter: true }
        .then(() => {
        // This will sync the database with the models (update any changes)
        console.log("Database is synced");
    })
        .catch((err) => {
        console.error("Error syncing the database:", err);
    });
    // Graceful shutdown
    const shutdown = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("\nShutting down gracefully...");
            yield dbInstance.close();
            console.log("Database connection closed.");
            process.exit(0);
        }
        catch (err) {
            console.error("Error during shutdown:", err.message);
            process.exit(1);
        }
    });
    // INFO : Graceful shutdown handlers
    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
};
exports.default = setupDatabase;
