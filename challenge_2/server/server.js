const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const port = 3000;
const upload = multer();

app.use(bodyParser.json());    // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded

app.use(express.static('client'));

app.post('/upload_json', upload.single('filePicker_json'), (req, res, next) => {
  var data = JSON.parse(String(req.file.buffer));
  var csv = parseIntoCSV(data);

  res.setHeader('Content-disposition', 'attachment; filename=default.csv');
  res.set('Content-type', 'text/csv');
  res.status(200).send(csv);
});

app.post('/upload_text', (req, res, next) => {
  var csv = parseIntoCSV(req.body);

  res.setHeader('Content-disposition', 'attachment; filename=default.csv');
  res.set('Content-type', 'text/csv');
  res.status(200).send(csv);
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

    if (person.children && person.children.length) {
      person.children.forEach(person => (parseValues(person)));
    }
  }

  parseValues(data);
  var output = headers.join(',') + '\n' + results.join('\n');
  return output;
}