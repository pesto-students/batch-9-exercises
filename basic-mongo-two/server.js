const express = require('express');
const database = require('./src/database');
const projectRoutes = require('./src/routes/projects');

database.getDb((error, result) => {
  if (result) {
    console.log('Connection to database is successful.');
  }
});

const app = express();
const port = 3000;

app.use('/projects', projectRoutes);

app.listen(port, () => console.log(`Started listening on port ${port}!`));

process.on('beforeExit', async () => {
  const dbClient = await database.getDbClient();
  dbClient.close();
});
