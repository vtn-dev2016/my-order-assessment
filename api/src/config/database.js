import { Sequelize, Options } from "sequelize";
import { createNamespace } from "cls-hooked";

import config from "./config";

const dbConfig = config.database;
class Database {
  static instance;
  _sequelize;

  constructor() {
    const namespace = createNamespace("my-very-own-namespace");
    Sequelize.useCLS(namespace);
    this._sequelize = new Sequelize(dbConfig);
  }

  static getInstance() {
    try {
      if (!Database.instance) {
        Database.instance = new Database();
      }
      return Database.instance;
    } catch (error) {
      console.log("getInstance: ", error);
    }
  }

  get sequelize() {
    return this._sequelize;
  }

  static initializeModels() {
    Database.getInstance().sequelize.createSchema("public", {});
  }
}

export default Database;
