const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();

const postRoutes = require('./routes/postRoutes.js');
const userRoutes = require('./routes/userRoutes.js');


// CONNECT DB


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// app.use(' /api/posts ', Routes);
// app.use(' /api/users ', UserRoutes);


module.exports = app;