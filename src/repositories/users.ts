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
        connectString: "oracle:1521/XE",
      },
    });
  }

  async init() {
    try {
      const response = await this.dbClient.query(
        "SELECT CURRENT_DATE FROM DUAL"
      );
      return response;
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}
