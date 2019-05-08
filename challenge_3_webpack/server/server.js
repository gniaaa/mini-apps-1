const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//var path = path.join(__dirname, '../public');
app.use(express.static('../public'))
