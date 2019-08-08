const router = require('express').Router();
const { db } = require('../database');


router.route('/')
  .get(async (req, res) => {
    const projectsCollection = db.getDb.collection('projects');
    const query = {};
    const projects = await projectsCollection.find(query);
    res.json(projects);
  });
module.exports = router;
