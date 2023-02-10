import { Router } from "express";
import AuthController from "../controllers/authentication.controller";

class AuthenticationRoutes {
  router = Router();
  authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.route("/signin").post(this.authController.signin);
  }
}

export default AuthenticationRoutes;
