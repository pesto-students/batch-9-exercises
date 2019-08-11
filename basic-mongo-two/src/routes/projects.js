const router = require('express').Router();
const { db, checkAndReturnObjectId } = require('../database');


router.route('/')
  .get(async (req, res) => {
    const projectsCollection = db.getDb.collection('projects');
    const query = {};
    const projects = await projectsCollection.find(query).toArray();
    res.json(projects);
  })

  .post(async (req, res) => {
    const projectsCollection = db.getDb.collection('projects');
    const docs = req.body;
    const result = await projectsCollection.insertMany(docs);
    res.json(result);
  });

router.route('/:id')
  .all((req, res, next) => {
    const objectId = checkAndReturnObjectId(req.params.id);
    if (!objectId) {
      return res.status(400).send('Invalid Request');
    }
    req.params.id = objectId;
    return next();
  })
  .get(async (req, res) => {
    const projectsCollection = db.getDb.collection('projects');
    const projectId = req.params.id;
    const query = { _id: projectId };
    const project = await projectsCollection.findOne(query);
    res.json(project);
  })

  .put(async (req, res) => {
    const projectsCollection = db.getDb.collection('projects');
    const projectId = req.params.id;
    const query = { _id: projectId };
    const updates = req.body;
    const updateRequest = {
      $set: updates,
    };
    const updateStatus = await projectsCollection.findOneAndUpdate(query, updateRequest);
    res.json(updateStatus);
  })
  .delete(async (req, res) => {
    const projectsCollection = db.getDb.collection('projects');
    const projectId = req.params.id;
    const query = { _id: projectId };
    const deleteStatus = await projectsCollection.findOneAndDelete(query);
    res.json(deleteStatus);
  });

module.exports = router;
