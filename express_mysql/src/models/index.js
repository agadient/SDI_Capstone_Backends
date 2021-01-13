'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'production';
var config = "";
console.log("Starting in "+ env + " mode");

if (env === 'development') {
  config = require(__dirname + '/../config/config.json').development;
}
else if (env === 'test') {
  config = require(__dirname + '/../config/config.json').test;
}
else {
  config = {
    username: process.env.MYSQL_USER,
    password: process.env.APP_DB_ADMIN_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: 'mysql'
  }
}

console.log("Process ENV: "+process.env.NODE_ENV)
const db = {};




let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



db.sequelize = sequelize;
db.Sequelize = Sequelize;
sequelize.sync({force : true});
module.exports = db;


