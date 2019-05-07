const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client'));


app.post('/upload_json', (req, res, next) => {
  var data = JSON.parse(req.body.json);
  var csv = parseIntoCSV(data);

  res.setHeader('Content-disposition', 'attachment; filename=default.csv');
  res.set('Content-type', 'text/csv');
  res.send(csv);
});


app.listen(port, () => (console.log('listening on port:', port)));

const parseIntoCSV = (data) => {
  var headers = [];
  var results = [];

  for (var key in data) {
    if (key !== 'children') {
      headers.push(key);
    }
  }

  const parseValues = (person) => {
    const individual_details = [];
    for (var i = 0; i < headers.length; i++) {
      let value = person[headers[i]];
      individual_details.push(value);
    }

    results.push(individual_details.join(','));

    if (person.children.length) {
      person.children.forEach(person => (parseValues(person)));
    }
  }

  parseValues(data);
  var output = headers.join(',') + '\n' + results.join('\n');
  return output;
}