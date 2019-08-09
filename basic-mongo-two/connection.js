const mongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb://localhost:27017';
const dbName = 'pesto-day-19';
const createConnection = function () {
    const connectionPromise = new Promise((resolve, reject) => {
        mongoClient.connect(connectionString, { useNewUrlParser: true }, (error, client) => {
            if (error) {
                reject(error);
            }
            resolve(client.db(dbName));
        });
    });
    return connectionPromise;
}

module.exports = {
    createConnection: createConnection
}