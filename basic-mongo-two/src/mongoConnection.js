const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017/pesto-day-19';
MongoClient.connect(URL, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log(err);
  }

  const collection = db.collection('projects');
  collection.delete()
  // collection.insert({ name: 'tic tac toe' });
  // collection.find().toArray((err, docs) => {
  //   console.log(docs);
  //   db.close();
  // });
});
