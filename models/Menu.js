const {sequelize, DataTypes, Model} = require('../db');
const { Sequelize } = require('sequelize');

class Menu extends Model {}

Menu.init({
  title: DataTypes.STRING
}, {
  sequelize,
  modelName: "Menu"
})

module.exports = {Menu};