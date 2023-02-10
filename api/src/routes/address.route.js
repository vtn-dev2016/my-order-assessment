import { Router } from "express";
import AddressController from "../controllers/address.controller";

class AddressRoutes {
  router = Router();
  addressController = new AddressController();

  constructor() {
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.route(`/address`).get(this.addressController.getAddress);
  }
}

export default AddressRoutes;
