const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu');

// associations: a Restaurant can have multiple Menus
Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

module.exports = { Restaurant, Menu }
