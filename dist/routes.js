"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersController_1 = __importDefault(require("./controllers/usersController"));
const users_1 = __importDefault(require("./repositories/users"));
class Routes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        const usersRepository = new users_1.default();
        const usersController = new usersController_1.default(usersRepository);
        this.router.use("/users", usersController.router);
    }
}
exports.default = Routes;
