const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(express.static('../public'));

app.get('/', (req, res, next) => {
  res.render('index.html');
})

app.listen(port, () => console.log('listening on port', port));