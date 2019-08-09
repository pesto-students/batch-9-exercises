const express = require('express');
const app = express();
const projectRouter = require('./router/project');
const bodyParser = require('body-parser');

const { getDb, getDbClient } = require('./database');
const port = 3000;

let db;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(async (req, res, next) => {
  db = await getDb();
  console.log('Got db object');
  req.db = db;
  next();
});

//TASK
const fetchFromDb = async () => {
  db = await getDb();
  const projects = db.collection('projects');
  console.log(await projects.find({}).toArray());
};

//TASK
const insertProject = async () => {
  db = await getDb();
  const projects = db.collection('projects');

  console.log(
    await projects.insertOne({ developer: 'Sumit', project: 'This app' })
  );
};

app.use('/projects', projectRouter);

// fetchFromDb();
// insertProject();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
