const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./connection');
const { ObjectId } = require('mongodb');

connection.createConnection()
    .then((db) => {
        const projects = db.collection('projects');
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        app.get('/projects', (req, res) => {
            projects.find().toArray((error, items) => {
                if (error) {
                    return res.json(`Error in fetching projects : ${error}`);
                }
                return res.json(items);
            });
        });

        app.get('/projects/:id', (req, res) => {
            projects.findOne({ _id: ObjectId(req.params.id) }, (error, item) => {
                if (error) {
                    return res.json(`Error in fetching project : ${error}`);
                }
                return res.json(item);
            });
        });

        app.post('/projects', (req, res) => {
            const projectsData = req.body;
            projects.insertMany(projectsData, (error, items) => {
                if (error) {
                    return res.json(`Error in adding project(s) : ${error}`);
                }
                if (items.insertedIds > 0) {
                    return res.json("data inserted successfully");
                }
            });
        });

        app.put('/projects/:id', (req, res) => {
            const projectData = req.body;
            const projectId = req.params.id;
            projects.updateOne({ _id: ObjectId(projectId) }, { $set: projectData }, (error, item) => {
                if (error) {
                    return res.json(`Error in updating project : ${error}`);
                }
                const { matchedCount, modifiedCount } = item;
                if (matchedCount === 0) {
                    return res.json("could not find the project");
                }
                if (modifiedCount === 1) {
                    return res.json("project updated successfully");
                }
            });
        });

        app.delete('/projects/:id', (req, res) => {
            const projectId = req.params.id;
            projects.deleteOne({ _id: ObjectId(projectId) }, (error, item) => {
                if (error) {
                    return res.json(`Error in deleting project : ${error}`);
                }
                const { deletedCount } = item;
                if (deletedCount === 1) {
                    return res.json("project deleted successfully");
                } else {
                    return res.json("could not delete project");
                }
            });
        });

        app.listen(3000, () => {
            console.log(`Server listening on port 3000`);
        });
    })
    .catch((error) => {
        console.error(`Could not connect to the database due to error : ${error}`);
    });