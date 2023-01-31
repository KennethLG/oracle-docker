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
const sequelize_1 = require("sequelize");
class UsersRepository {
    constructor() {
        this.dbClient = new sequelize_1.Sequelize(process.env.DBNAME || '', process.env.DBUSERNAME || '', process.env.DBPASSWORD, {
            dialect: 'oracle',
            host: process.env.ORACLE_CONTAINER,
            port: 1521,
            dialectOptions: {
                connectString: `${process.env.ORACLE_CONTAINER}:${process.env.ORALIST_HOST_PORT}/${process.env.DBNAME}`,
            },
        });
    }
    initDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.dbClient.authenticate();
                console.log("Connection has been established successfully.");
            }
            catch (error) {
                console.error("Unable to connect to the database:", error);
            }
        });
    }
}
exports.default = UsersRepository;
