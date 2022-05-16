import { BusinessUtils } from "./businessUtils";

export class BusinessController {
  private businessUtils = new BusinessUtils();

  public createBusinessController = async (req, res) => {
    try {
      const result = await this.businessUtils.createBusinessUtils(req.body);
      return res
        .status(200)
        .json({ message: "Business create successfully", data: result });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };

  public getAllBusinessController = async (req, res) => {
    try {
      const result = await this.businessUtils.getAllBusinessUtils();
      return res.status(200).json({ message: "Business Data", data: result });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };

  public createBusinessInfoController = async (req, res) => {
    try {
      const result = await this.businessUtils.createBusinessInfoUtils(req.body);
      return res
        .status(200)
        .json({ message: "Business Info create successfully", data: result });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };
}
