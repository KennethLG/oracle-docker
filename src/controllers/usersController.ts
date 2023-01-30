import { Router } from "express";
import IUsersController from "../domain/usersController";
import IUsersRepository from "../domain/usersRepository";

export default class UsersController implements IUsersController {
  router: Router;
  usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.router = Router();
    this.routes();
    this.usersRepository = usersRepository;
  }

  routes() {
    this.router.get("/", (req, res) => {
      this.usersRepository.init();
    });
  }
}
