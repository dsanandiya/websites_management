const websites = require("../../../models").websites;

export class WebsitesMiddleware {
  public isExistsWebsites = async (req, res, next) => {
    try {
      const isExists = await websites.findOne({
        where: { name: req.body.name },
      });
      if (isExists) {
        return res.status(400).json({ error: "Website alreay exists" });
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server Error" });
    }
  };
}
