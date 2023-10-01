const {sequelize, DataTypes, Model} = require('../db');

class Item extends Model {}

Item.init({
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  price: DataTypes.DECIMAL(2),
  vegetarian: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: "Item"
})

module.exports = {Item};