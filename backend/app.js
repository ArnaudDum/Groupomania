const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();
const mysql = require('mysql2');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postRoutes = require('./routes/postRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'High210jump--))',
    database: 'groupo_network'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
});

app.use(helmet());


app.use('/posts', postRoutes);
app.use('/users', userRoutes);


module.exports = app;