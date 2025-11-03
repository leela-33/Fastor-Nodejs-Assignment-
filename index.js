const Sequelize = require('sequelize');
const sequelize = require('../config/database');


const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Models
db.Employee = require('./employee')(sequelize, Sequelize.DataTypes);
db.Enquiry = require('./enquiry')(sequelize, Sequelize.DataTypes);


// Relationships
// Enquiry.counselorId -> Employee.id (nullable)
db.Employee.hasMany(db.Enquiry, { foreignKey: 'counselorId' });
db.Enquiry.belongsTo(db.Employee, { foreignKey: 'counselorId' });


module.exports = db;