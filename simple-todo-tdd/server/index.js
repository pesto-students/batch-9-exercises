const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 8080;

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const { connection } = mongoose;

connection.once('open', () => {
  console.log('mongodb connected successfully');
});

app.get('/', (req, res) => {
  res.json('Response from server');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
