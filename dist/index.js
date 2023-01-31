"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./main"));
const users_1 = __importDefault(require("./repositories/users"));
const app = new main_1.default();
const db = new users_1.default();
app.init();
db.initDB();
