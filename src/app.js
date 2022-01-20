'use strict';
const express = require('express');
const app = express();
const router = express.Router();

//Carregar rotas
const indexRoute = require('./routes/index');
const itemRoutes = require('./routes/item-routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
//app.use(express.urlencoded({ limit: '50mb' }));
//app.use(logger);
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//app.use(express.json());

app.use('/', indexRoute);
app.use('/api', itemRoutes.routes);

module.exports = app;