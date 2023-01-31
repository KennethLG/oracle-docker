import { Sequelize } from "sequelize";
import IUsersRepository from "../domain/usersRepository";

export default class UsersRepository implements IUsersRepository {
  dbClient: Sequelize;

  constructor() {
    this.dbClient = new Sequelize("XE", "system", "oracle", {
      dialect: "oracle",
      host: "oracle",
      port: 1521,
      dialectOptions: {
        connectString: "XE",
      },
    });
  }

  async init() {
    try {
      await this.dbClient.authenticate();
      console.log("Connection has been established successfully.");
      return "Connection has been established successfully.";
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      return "Unable to connect to the database:";
    }
  }
}
