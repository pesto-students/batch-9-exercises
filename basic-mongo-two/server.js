const express = require('express');
const { getDb, getDbClient } = require('./index.js');

const app = express();
const port = 3000;

const initializeDB = async (req, res, next) => {
  const db = await getDb();
  req.collection = db.collection('projects');
  next();
};

app.use(initializeDB);

app.get('/', (req, res) => res.redirect('/projects'));

app.get('/projects', async (req, res) => {
  const allProjects = await req.collection.find({}).toArray();
  res.json(allProjects);
});


app.get('/projects/:id', (req, res) => res.redirect('/projects'));

app.post('/projects', (req, res) => res.redirect('/projects'));

app.put('/projects/:id', (req, res) => res.redirect('/projects'));

app.delete('/projects/:id', (req, res) => res.redirect('/projects'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

process.on('beforeExit', async () => {
  const client = await getDbClient();
  return client.close();
});
