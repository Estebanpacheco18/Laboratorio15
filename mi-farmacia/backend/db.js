const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('bd_Farmacia', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    username: 'root',
    password: '1234',
    logging: false
});
module.exports = sequelize;