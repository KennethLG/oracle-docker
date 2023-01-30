import { Sequelize } from "sequelize";

export default abstract class IUsersRepository {
  abstract dbClient: Sequelize;
  abstract init(): void;
}
