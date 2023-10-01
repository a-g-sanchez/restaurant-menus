const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu');
const {Item} = require('./Item');

// associations: 
// a Restaurant can have multiple Menus
Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

// a Menu can have multiple Items and vice versa
Menu.belongsToMany(Item, {through: "menu_item"});
Item.belongsToMany(Menu, {through: "menu_item"});

module.exports = { Restaurant, Menu, Item }
