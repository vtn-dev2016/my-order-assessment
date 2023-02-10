import { Router } from "express";

import Address from "./address.route";
import Authentication from "./authentication.route";
import Authorization from "./authorization.route";

class RouterIndex {
  router = Router();
  address = new Address();
  authentication = new Authentication();
  authorization = new Authorization();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', function (req, res) {
      res.status(200).json({
        message: "ok",
        success: true
      });
    })

    this.router.use("/api/v1", [
      this.authentication.router,
      this.authorization.router,
      this.address.router,
    ]);

  }
}

export default RouterIndex;
