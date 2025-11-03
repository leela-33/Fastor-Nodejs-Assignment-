require('dotenv').config();
const { Sequelize } = require('sequelize');


const dialect = process.env.DB_DIALECT || 'sqlite';


const sequelize = new Sequelize({
dialect,
storage: process.env.DB_STORAGE || './crm_db.sqlite',
logging: false,
});


module.exports = sequelize;