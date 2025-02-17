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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const syncDatabase_1 = __importDefault(require("./db/config/syncDatabase"));
const resReqConf_1 = __importDefault(require("./db/config/resReqConf"));
const index_js_1 = __importDefault(require("./db/index.js"));
const app = (0, express_1.default)();
// authorize all cors:
app.use((0, cors_1.default)());
// syncing database based on models
(0, syncDatabase_1.default)();
// basic setup for the app: body parser and urlencoded, etc.
(0, resReqConf_1.default)(app);
// use the express-static middleware
app.use(express_1.default.static("public"));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        message: "WELCOME TO AIRAKAZ.FR API",
    });
}));
const { dbModels } = index_js_1.default;
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield dbModels.user.findAll();
    res.send({
        users,
    });
}));
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3333;
if (process.env.NODE_ENV !== "test") {
    app.listen(port, "0.0.0.0", () => console.log("Server is running..."));
}
exports.default = app;
