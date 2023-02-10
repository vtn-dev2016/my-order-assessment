import config from "../config/config";
import jwt from "jsonwebtoken"

const jwtGenerate = (user) => {
    const accessToken = jwt.sign(
        { firstName: user.firstName, lastName: user.lastName, id: user.id },
        config.ACCESS_TOKEN_SECRET,
        { expiresIn: "10d", algorithm: "HS256" }
    )
    return accessToken
}

export { jwtGenerate }
