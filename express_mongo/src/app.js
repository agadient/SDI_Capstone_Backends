// app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const product_controller = require('./controllers/product.controller');
const cors = require('cors')
// initialize our express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const env = process.env.NODE_ENV || 'production';
console.log("Starting in '"+env+"' mode");

const mongoose = require('mongoose');
var mongoDB = null;
if (env === 'development') mongoDB = 'mongodb://root:root@localhost:8010/admin';
//FILL IN BELOW THE CORRENT ENVIRONMENT VARAIBLES FROM THE MANIFEST
else mongoDB = `mongodb://${process.env.MONGO_USER}@${process.env.APP_DB_ADMIN_PASSWORD}:${MONGOHOST}:${MONGOPORT}`


mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
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
    username: process.env.PG_USER,
    password: process.env.APP_DB_ADMIN_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres'
  }
}
 */


let port = 8000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

app.use(product)

module.exports = app;
