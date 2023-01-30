import express, { Application } from "express";
import Routes from "./routes";

export default class App {
  private readonly app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(new Routes().router);
  }

  init() {
    this.app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  }
}
