import { asyncMiddleware } from "../middlewares/async.middleware";
// import { Op } from "sequelize";
// import * as bcrypt from "bcrypt";
// import Database from "../config/database";
// import firebase from '../../Firebase';
import config from "../config/config";
import jwt from "jsonwebtoken"
// const sequelize = Database.getInstance().sequelize;
import UserModel from "../models/user.model";
import { jwtGenerate } from '../utils/jwt'
import * as bcrypt from "bcrypt";

const users = [
  { id: 1, email: "vtn.dev2016@gmail.com", refresh: null },
  { id: 2, email: "Tom@test.com", refresh: null },
  { id: 3, email: "Chris@test.com", refresh: null },
  { id: 4, email: "David@test.com", refresh: null },
]


class AuthenticationController {
  signin = asyncMiddleware(
    async (req, res, next) => {
      const { email, password } = req.body
      const user = await UserModel.findOne({
        where: {
          email
        }
      });
      if (!email || !user) {
        return res.status(401).json({
          success: false,
          message: "Please check username or password and try again"
        });
      }
      const match = await bcrypt.compare(password, user.dataValues.password);
      if (match) {
        const access_token = jwtGenerate(user.dataValues)
        return res.status(200).json({
          success: true,
          message: "ok",
          access_token
        })
      } else {
        return res.status(401).json({
          success: false,
          message: "Please check username or password and try again"
        });
      }
    }
  );
}

export default AuthenticationController;
