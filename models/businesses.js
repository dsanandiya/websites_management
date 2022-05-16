"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class businesses extends Model {
    static associate(models) {
      models.businesses.hasMany(models.business_info);
    }
  }
  businesses.init(
    {
      name: DataTypes.STRING,
      website_id: DataTypes.INTEGER,
      address: DataTypes.TEXT,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "businesses",
    }
  );
  return businesses;
};
