import { Database } from "../../config/dbconnection";
const { QueryTypes } = require("sequelize");

const businesses = require("../../../models").businesses;
const business_info = require("../../../models").business_info;

export class BusinessUtils {
  private database = new Database();
  private sequlize = this.database.connect();
  public createBusinessUtils = async (data) => {
    try {
      const _result = await businesses.create(data);
      const result = _result.get({ plain: true });
      return result;
    } catch (err) {
      throw err;
    }
  };

  public getAllBusinessUtils = async () => {
    try {
      return await businesses.findAndCountAll({});
    } catch (err) {
      throw err;
    }
  };

  public createBusinessInfoUtils = async (data) => {
    try {
      const _result = await business_info.create(data);
      const result = _result.get({ plain: true });
      return result;
    } catch (err) {
      throw err;
    }
  };

  public getRevenueList = async () => {
    try {
      const result = await this.sequlize.query(
        `SELECT bi.business_id as id,b.name,b.email,b.phone, sum(revenue) as totalRevenue,to_char(b.created_at,'DD-MM-YYYY') as date,
        to_char(b.created_at,'Month') as month, w.name as brokername
              FROM public.business_infos as bi
            INNER JOIN public.businesses b on b.id = bi.business_id
            INNER JOIN public.websites w on w.id = b.website_id
              group by bi.business_id,b.name,b.address,b.email,b.phone,b.created_at,w.name
              order by bi.business_id;`,
        { type: QueryTypes.SELECT }
      );
      return result;
    } catch (err) {
      throw err;
    }
  };
}
