import express from "express";
import UsersController from "./controllers/usersController";
import UsersRepository from "./repositories/users";

export default class Routes {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes() {
    const usersRepository = new UsersRepository();
    const usersController = new UsersController(usersRepository);
    this.router.use(usersController.router);
  }
}
