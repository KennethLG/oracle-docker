import { Dialect, Sequelize } from "sequelize";
import IUsersRepository from "../domain/usersRepository";
import { db }from "./config/dbConfig";

export default class UsersRepository implements IUsersRepository {
  dbClient: Sequelize;
 
  constructor() {
    this.dbClient = new Sequelize(db.DB || '', db.USER || '', db.PASSWORD, {
    // this.dbClient = new Sequelize('XE', 'system' , 'oracle', {
      dialect: 'oracle',
      // host: process.env.CONTAINER,
      host: db.HOST,
      port: 1521,
      dialectOptions: {
        connectString: db.CONNECTSTRING,
        // connectString: "oracle:1521/XE",
      },
    });
  }

  async initDB() {
    try {
      await this.dbClient.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}
