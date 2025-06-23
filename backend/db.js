const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('semana15', 'root', '', {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;