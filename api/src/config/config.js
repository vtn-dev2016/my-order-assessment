import development from "./env/development";
import production from "./env/production";
const dbConfig = require("../../db-config/config.js")[
  process.env.NODE_ENV
];

const envConfig =
  process.env.NODE_ENV === "development" ? development : production;
export default { ...envConfig, database: dbConfig };
