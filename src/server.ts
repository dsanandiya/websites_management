import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as exphbs from "express-handlebars";
import { Utils } from "./helpers/utils";
import { Database } from "./config/dbconnection";
import { Routes } from "./routes";
import { WebsitesUtils } from "./modules/websites/websitesUtils";
import { BusinessUtils } from "./modules/business/businessUtils";

dotenv.config({});

export class App {
  protected app: express.Application;
  constructor() {
    const NODE_ENV = process.env.NODE_ENV;
    const PORT = process.env.PORT as string;
    this.app = express();

    const database = new Database();
    database.connect();

    this.app.all("/*", (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Request-Headers", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization, token, x-device-type, x-app-version, x-build-number, uuid,x-auth-token,X-L10N-Locale"
      );
      res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
      if (req.method === "OPTIONS") {
        res.writeHead(200);
        res.end();
      } else {
        next();
      }
    });

    this.app.engine(
      "hbs",
      exphbs.engine({
        defaultLayout: "main",
        extname: ".hbs",
        helpers: {
          inc: function (value, options) {
            return parseInt(value) + 1;
          },
        },
      })
    );
    this.app.set("view engine", "hbs");
    this.app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.json(), (error, req, res, next) => {
      if (error) {
        return res.status(400).json({ error: "Invalid request body" });
      }
      next();
    });

    this.app.get("/", async (req, res) => {
      const websitesUtils = new WebsitesUtils();
      const businessUtils = new BusinessUtils();
      const labels = await Utils.getLast12MonthWithYear();
      const result = await websitesUtils.getAllWebsitesWithBusinessUtils();
      const revenueList = await businessUtils.getRevenueList();
      const dataset = [];
      for (const broker of result) {
        const color = await Utils.getRadomColor();
        const obj = {
          backgroundColor: color,
          borderColor: color,
          label: broker.name,
          data: broker.sales,
        };

        dataset.push(obj);
      }
      return res.render("home", {
        chartInfo: JSON.stringify({
          labels,
          dataset,
        }),
        revenueList,
      });
    });

    const routes = new Routes(NODE_ENV);
    this.app.use("/api/v1", routes.path());
    this.app.listen(PORT, async () => {
      console.log(`server running on port: ${PORT}`);
    });
  }
}
