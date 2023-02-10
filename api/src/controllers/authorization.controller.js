import { asyncMiddleware } from "../middlewares/async.middleware";
import config from "../config/config";
import jwt from "jsonwebtoken"

class AuthorizationController {

  authorize = asyncMiddleware(
    async (req, res, next) => {
      try {
        if (!req.headers["authorization"]) return res.sendStatus(401)
        const token = req.headers["authorization"].replace("Bearer ", "")
        jwt.verify(token, config.ACCESS_TOKEN_SECRET, (error, decoded) => {
          if (error) throw new Error(error)
        })
        next()
      } catch (error) {
        console.log("error ", error);
        return res.sendStatus(403)
      }
    }
  );
}



export default AuthorizationController;
