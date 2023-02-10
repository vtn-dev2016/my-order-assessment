import cors, { CorsOptions } from "cors";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";
import logger from "morgan";
import http from "http";
import path from "path";
import errorMiddleware from "./middlewares/error.middleware";
import Database from "./config/database";
import config from "./config/config";
import firstSeed from './intitialDb/seed';
class App {
  app;
  isProd;
  server;
  port = config.port || 9090;

  constructor(routes) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.isProd = process.env.NODE_ENV === "production" ? true : false;

    Database.getInstance()
      .sequelize.authenticate()
      .then(() => {
        this.initializeMiddlewares();
        this.initializeLogBody();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
      })
      .catch((error) => {
        console.error("Unable to connect to the database:", error);
      });
  }

  getServer() {
    return this.server;
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }

  initializeLogBody() {
    this.app.use(
      (
        req,
        res,
        next
      ) => {
        console.log("req.body: ", req.body);
        next();
      }
    );
  }

  async initializeMiddlewares() {
    require("./models");
    if (this.isProd) {
      this.app.set("trust proxy", 1); // trust first proxy
      this.app.use(compression());
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(logger("combined"));
    } else {
      this.app.use(logger("dev"));
      //ORM
      // Database.initializeModels();
      // Database.getInstance().sequelize.sync();
      this.app.get(
        "/init-db",
        async (req, res) => {
          firstSeed(res)
        }
      );
    }

    const corsOptions = {
      origin: function (origin, callback) {
        if (config.whitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    };

    this.app.use(cors(corsOptions));
    this.app.use(express.static(path.join(__dirname, "..", "public")));
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    // this.app.use(cookieParser());
  }

  initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
