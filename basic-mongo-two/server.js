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
            projects.find().toArray((err, items) => {
                if (err) {
                    throw err;
                }
                res.json(items);
            });
        });

        app.get('/projects/:id', (req, res) => {
            projects.findOne({ _id: ObjectId(req.params.id) }, (err, item) => {
                if (err) {
                    throw err;
                }
                res.json(item);
            });
        });

        app.post('/projects', (req, res) => {
            projects.insert();
        });

        app.put('/projects/:id', (req, res) => {

        });

        app.delete('/projects/:id', (req, res) => {

        });

        app.listen(3000, () => {
            console.log(`Server listening on port 3000`);
        });
    })
    .catch((error) => {
        console.error(`Could not connect to the database due to error : ${error}`);
    });