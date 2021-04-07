const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: 10,
    host    : 'localhost',
    user    : process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});

module.exports = pool;