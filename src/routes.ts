import express = require("express");
import { BusinessRoutes } from "./modules/business/businessRoutes";
import { WebsitesRoutes } from "./modules/websites/websitesRoutes";

export class Routes {
  protected basePath: string;

  constructor(NODE_ENV: string) {
    switch (NODE_ENV) {
      case "production":
        this.basePath = "/app/dist";
        break;
      case "development":
        this.basePath = "/app/public";
        break;
    }
  }

  public defaultRoute(req: express.Request, res: express.Response) {
    res.json({
      message: "Hello !",
    });
  }

  public path() {
    const router = express.Router();
    router.use("/websites", WebsitesRoutes);
    router.use("/business", BusinessRoutes);

    router.all("/*", (req, res) => {
      return res.status(404).json({ error: "URl not found" });
    });
    return router;
  }
}
