const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

const authenticatedRoutes = require('./routes/auth');
const publicRoutes = require('./routes/signup');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/signup', publicRoutes);

app.use('/', authenticatedRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
