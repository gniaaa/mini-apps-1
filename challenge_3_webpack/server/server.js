const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { User, Address, Payment } = require('./sequelize');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
//var path = path.join(__dirname, '../public');
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public'))

app.post('/account', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.json(user.dataValues.id);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

app.post('/address', (req, res, next) => {
  Address.create((req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.sendStatus(500));
});

app.post('/payment', (req, res, next) => {
  Payment.create((req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.sendStatus(500));

});

app.listen(port, () => { console.log('listening on', port) });