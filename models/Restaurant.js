const {sequelize, DataTypes, Model} = require('../db');
const { Sequelize } = require('sequelize');

class Restaurant extends Model {}

Restaurant.init({
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  cuisine: DataTypes.STRING
}, {
  sequelize, 
  modelName: "Restaurant"
});

module.exports = {Restaurant};