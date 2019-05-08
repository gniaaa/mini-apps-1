const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { User, Address, Payment } = require('./sequelize');

const app = express();
const port = process.env.PORT || 3000;
//var path = path.join(__dirname, '../public');
app.use(express.static('../public'))




app.listen(port, () => { console.log('listening on', port) });