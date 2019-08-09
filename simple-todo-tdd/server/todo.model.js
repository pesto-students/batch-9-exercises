const mongoose = require('mongoose');

const { Schema } = mongoose;

const Todo = new Schema({
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Todo', Todo);
