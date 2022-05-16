import { WebsitesUtils } from "./websitesUtils";

export class WebsitesController {
  private websitesUtils = new WebsitesUtils();

  public createWebsitesController = async (req, res) => {
    try {
      const result = await this.websitesUtils.createWebsitesUtils(req.body);
      return res
        .status(200)
        .json({ message: "Websites create successfully", data: result });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };

  public getAllWebsitesController = async (req, res) => {
    try {
      const result = await this.websitesUtils.getAllWebsitesWithBusinessUtils();
      return res.status(200).json({ message: "Websites Data", data: result });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };
}
