import { Router } from "express";

export default abstract class IUsersController {
  abstract router: Router;
  abstract routes(): void;
}
