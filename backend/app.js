const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();


// CONNECT DB

const Routes = require('./routes/routes.js');
const UserRoutes = require('./routes/userRoutes.js');


app.use(helmet());
app.use(bodyParser.json());

// app.use(' CHEMIN API ', Routes);
// app.use(' CHEMIN API ', UserRoutes);

module.exports = app;