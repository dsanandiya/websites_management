'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class websites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  websites.init({
    name: DataTypes.STRING,
    web_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'websites',
  });
  return websites;
};