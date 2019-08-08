const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
  console.log('all projects');
});

app.get('/projects/:id', (req, res) => {
  console.log('project id');
});

app.post('/projects', (req, res) => {
  console.log('post projects');
});

app.put('/projects/:id', (req, res) => {
  console.log('put projects');
});

app.delete('/projects/:id', (req, res) => {
  console.log('delete project');
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
