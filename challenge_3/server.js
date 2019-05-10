const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const sequelize = new Sequelize('shopping_cart', 'root', 'eugenia', {
  host: 'localhost',
  dialect: 'mysql',
});

const





  app.listen(port, () => console.log('listening on', port));