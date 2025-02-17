"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nocache_1 = __importDefault(require("nocache"));
// get morgan
const morgan_1 = __importDefault(require("morgan"));
const setupBasics = (app) => {
    app.use("/api", express_1.default.static("public"));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.disable("etag");
    app.set("trust proxy", true);
    app.use((0, nocache_1.default)());
    app.use((0, morgan_1.default)("combined"));
};
exports.default = setupBasics;
