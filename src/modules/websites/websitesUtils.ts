const { QueryTypes } = require("sequelize");
import { Database } from "../../config/dbconnection";
import { Utils } from "../../helpers/utils";

const websites = require("../../../models").websites;
const businesses = require("../../../models").businesses;

export class WebsitesUtils {
  private database = new Database();
  private sequlize = this.database.connect();
  public createWebsitesUtils = async (data) => {
    try {
      const _result = await websites.create(data);
      const result = _result.get({ plain: true });
      return result;
    } catch (err) {
      throw err;
    }
  };

  public getAllWebsitesUtils = async () => {
    try {
      return await websites.findAndCountAll({});
    } catch (err) {
      throw err;
    }
  };

  public getAllWebsitesWithBusinessUtils = async () => {
    try {
      const result = await this.sequlize.query(
        `SELECT TO_CHAR(DATE_TRUNC('month',b.created_at),'Mon-YYYY') AS  bussiness_month, COUNT(b.id) AS count, w.id,w.name	  
        FROM businesses  b inner join websites w on w.id = b.website_id
        WHERE b.created_at >
              date_trunc('month', CURRENT_DATE) - INTERVAL '1 year'
        GROUP BY DATE_TRUNC('month',b.created_at),w.id,w.name
        order by w.id;`,
        { type: QueryTypes.SELECT }
      );
      const monthList = await Utils.getLast12MonthWithYear();
      const websitesList = [];
      for (const data of result) {
        const obj: any = {};
        const index = await websitesList.findIndex((e) => e.name === data.name);
        if (index > -1) {
          websitesList[index].sales.push({
            count: +data.count,
            date: data.bussiness_month,
          });
        } else {
          obj.name = data.name;
          obj.sales = [{ count: +data.count, date: data.bussiness_month }];
          websitesList.push(obj);
        }
      }

      for (const data of websitesList) {
        for (const _data of monthList) {
          const exist = await data.sales.find((e) => e.date == _data);
          if (!exist) {
            data.sales.push({ count: 0, date: _data });
          }
        }
        data.sales.sort(function (a, b) {
          const keyA = new Date(a.date),
            keyB = new Date(b.date);
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });

        const sales = [];
        data.sales.forEach((e) => {
          sales.push(e.count);
        });

        data.sales = sales;
      }
      return websitesList;
    } catch (err) {
      throw err;
    }
  };
}
