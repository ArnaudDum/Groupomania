const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mysql = require('mysql');

const postRoutes = require('./routes/postRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const pool = mysql.createPool({
  connectionLimit: 10,
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'groupomania'
});

const databaseAccess = pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log('Connecté à la DB');
});

app.use(helmet());


app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

module.exports = databaseAccess;
module.exports = app;