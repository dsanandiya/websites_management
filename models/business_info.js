"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class business_info extends Model {
    static associate(models) {
      models.business_info.belongsTo(models.businesses, {
        foreignKey: "business_id",
        sourceKey: "business_id",
        targetKey: "id",
      });
    }
  }
  business_info.init(
    {
      business_id: DataTypes.INTEGER,
      revenue: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "business_info",
    }
  );
  return business_info;
};
