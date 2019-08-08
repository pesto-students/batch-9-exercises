const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views', './views');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => res.redirect('/form-with-get'));

app.get('/form-with-get', (req, res) => res.render('form-with-get'));

app.get('/form-with-post', (req, res) => res.render('form-with-post'));

app.get('/submit-form-with-get', (req, res) => {
  const requiredObj = { first: req.query.first, last: req.query.last };
  res.json(requiredObj);
});

app.post('/submit-form-with-post', (req, res) => {
  const requiredObj = { first: req.body.first, last: req.body.last };
  res.json(requiredObj);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
