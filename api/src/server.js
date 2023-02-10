import "dotenv/config";
import App from "./app";
import validateEnv from "./utils/validateEnv";
import RootRoute from "./routes/root.route";

validateEnv();

const app = new App([new RootRoute()]);

app.listen();