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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UsersController {
    constructor(usersRepository) {
        this.router = (0, express_1.Router)();
        this.routes();
        this.usersRepository = usersRepository;
    }
    routes() {
        this.router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.usersRepository.initDB();
            res.json({
                message: response,
            });
        }));
        this.router.get("/hello", (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.json({
                message: "Hello World!",
            });
        }));
    }
}
exports.default = UsersController;
