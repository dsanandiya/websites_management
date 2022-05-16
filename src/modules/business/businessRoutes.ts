import { Router } from "express";
import { Validator } from "../../validate";
import { BusinessController } from "./businessController";
import { BusinessMiddleware } from "./businessMiddleware";
import { CreateBusinessInfoModel, CreateBusinessModel } from "./businessModel";

const router: Router = Router();
const v: Validator = new Validator();
const businessController: BusinessController = new BusinessController();
const businessMiddleware: BusinessMiddleware = new BusinessMiddleware();

router.post(
  "/create",
  v.validate(CreateBusinessModel),
  businessMiddleware.isExistsBusiness,
  businessController.createBusinessController
);

router.get("/", businessController.getAllBusinessController);


router.post(
  "/create-info",
  v.validate(CreateBusinessInfoModel),
  businessMiddleware.isExistsBusinessDetails,
  businessController.createBusinessInfoController
);


export const BusinessRoutes: Router = router;
