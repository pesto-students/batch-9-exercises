/* eslint-disable arrow-body-style */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
  return res.render('form-with-get');
});

app.get('/submit-form-with-get', (req, res) => {
  return res.json({ first: req.query.first, last: req.query.last });
});

app.get('/form-with-post', (req, res) => {
  return res.render('form-with-post');
});

app.post('/submit-form-with-post', (req, res) => {
  return res.json({ first: req.body.first, last: req.body.last });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
