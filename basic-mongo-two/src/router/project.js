const { checkAndReturnObjectId } = require('../database');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const collection = req.db.collection('projects');
  const projects = await collection.find({}).toArray();

  res.json(projects);
});

router.get('/:id', async (req, res) => {
  const collection = req.db.collection('projects');
  console.log(req.params.id);
  const objectId = checkAndReturnObjectId(req.params.id);
  if (!objectId) {
    return res.status(400).send('Invalid project id');
  }
  const project = await collection.findOne({ _id: objectId });

  res.json(project);
});

router.post('/', async (req, res) => {
  const collection = req.db.getDb.collection('projects');
  const result = await collection.insertMany(req.body);
  res.json(result);
});

router.put('/:id', async (req, res) => {
  const collection = req.db.getDb.collection('projects');
  const updateStatus = await collection.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body
    }
  );
  res.json(updateStatus);
});

router.delete('/:id', async (req, res) => {
  const collection = req.db.getDb.collection('projects');
  const deleteStatus = await collection.findOneAndDelete({
    _id: req.params.id
  });
  res.json(deleteStatus);
});

module.exports = router;
