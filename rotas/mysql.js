const mysql = require('mysql');
const nodemon = require('./nodemon');

var pool = mysql.createPool({
    "user" : nodemon.env.MYSQL_USER,
    "password" : nodemon.env.MYSQL_PASSWORD,
    "database" : nodemon.env.MYSQL_DATABASE,
    "host" : process.env.MYSQL_HOST,
    "port" : process.env.MYSQL_PORT
});

exports.pool = pool;