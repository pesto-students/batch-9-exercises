const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.redirect('/projects'));

app.get('/projects', (req, res) => res.send('Hello'));

app.get('/projects/:id', (req, res) => res.redirect('/projects'));

app.post('/projects', (req, res) => res.redirect('/projects'));

app.put('/projects/:id', (req, res) => res.redirect('/projects'));

app.delete('/projects/:id', (req, res) => res.redirect('/projects'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
