const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
    seedItem
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        const restaurant = await Restaurant.create({
            name: "McDonald's",
            location: "Moscow",
            cuisine: "American casual"
        })
        expect(restaurant.name).toEqual("McDonald's");
    });

    test('can create a Menu', async () => {
        const menu = await Menu.create({title: 'Brunch'});
        expect(menu.title).toEqual('Brunch');
    });

    test('can find Restaurants', async () => {
        const restaurants = await Restaurant.findAll();
        expect(restaurants.length).toEqual(1);
    });

    test('can find Menus', async () => {
        const menus = await Menu.findAll();
        expect(menus.length).toEqual(1);
    });

    test('can delete Restaurants', async () => {
        const restaurant = await Restaurant.findByPk(1);
        const deletedRestaurant = await restaurant.destroy();
        expect(deletedRestaurant.id).toEqual(1);
    });
});

describe('test associations', () => {
    /**
     * Runs the code prior to all tests
     */
        beforeAll(async () => {
            // the 'sync' method will create tables based on the model class
            // by setting 'force:true' the tables are recreated each time the 
            // test suite is run
            await sequelize.sync({ force: true });
            await Restaurant.bulkCreate(seedRestaurant);
            await Menu.bulkCreate(seedMenu);
            await Item.bulkCreate(seedItem);
        });
    
});

describe('test associations', () => {
    /**
     * Runs the code prior to all tests
     */
        beforeAll(async () => {
            // the 'sync' method will create tables based on the model class
            // by setting 'force:true' the tables are recreated each time the 
            // test suite is run
            await sequelize.sync({ force: true });
            await Restaurant.bulkCreate(seedRestaurant);
            await Menu.bulkCreate(seedMenu);
            await Item.bulkCreate(seedItem);
        });
    

    test('a Restaurant has multiple Menus', async () => {
        const rest = await Restaurant.findByPk(1);
        await rest.addMenu([1, 2]);
        const menus = await rest.getMenus();
        expect(menus.length).toBe(2);
    })

    test('a Menu has multiple items', async () => {
        const menu = await Menu.findByPk(1);
        await menu.addItems([1, 2]);
        const items = await menu.getItems();
        expect(items.length).toBe(2);
    })

    test('eager loading', async () => {
        const menu1 = await Menu.findByPk(1, {
            include: "Items"
        });
        expect(menu1.Items.length).toBe(2);
    })
})