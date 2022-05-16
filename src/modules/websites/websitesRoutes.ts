import { Router } from "express";
import { Validator } from "../../validate";
import { WebsitesController } from "./websitesController";
import { WebsitesMiddleware } from "./websitesMiddleware";
import { CreateWebsitesModel } from "./websitesModel";

const router: Router = Router();
const v: Validator = new Validator();
const websitesController: WebsitesController = new WebsitesController();
const websitesMiddleware: WebsitesMiddleware = new WebsitesMiddleware();

router.post(
  "/create",
  v.validate(CreateWebsitesModel),
  websitesMiddleware.isExistsWebsites,
  websitesController.createWebsitesController
);

router.get("/", websitesController.getAllWebsitesController);

export const WebsitesRoutes: Router = router;
