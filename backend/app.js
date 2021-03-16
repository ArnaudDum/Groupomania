const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();
const mysql = require('mysql');

const postRoutes = require('./routes/postRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

//const connectToDB = mysql.createConnection({
//    host: 'localhost',
//    user: 'dumar',
//    password: 'High210jump--))'
//});

//connectToDB.connect();

//connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//    if (err) throw err;
//    console.log('The solution is: ', rows[0].solution);
//});


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);


module.exports = app;