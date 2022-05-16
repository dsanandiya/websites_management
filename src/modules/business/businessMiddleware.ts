const businesses = require("../../../models").businesses;
const business_info = require("../../../models").business_info;

export class BusinessMiddleware {
  public isExistsBusiness = async (req, res, next) => {
    try {
      const isExists = await businesses.findOne({
        where: { name: req.body.name, website_id: req.body.website_id },
      });
      if (isExists) {
        return res
          .status(400)
          .json({ error: "Business is alreay exists with this Website" });
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };

  public isExistsBusinessDetails = async (req, res, next) => {
    try {
      const isExists = await businesses.findOne({
        where: { id: req.body.business_id },
      });
      if (isExists) {
        next();
      } else {
        return res.status(400).json({ error: "Business Not founud" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };
}
