import { Router } from "express";
import AuthorizationController from "../controllers/authorization.controller";

class AuthorizationRoutes {
  router = Router();
  authorizationController = new AuthorizationController();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.use(this.authorizationController.authorize);
  }
}

export default AuthorizationRoutes;
