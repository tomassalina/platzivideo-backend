const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  contentRating: {
    type: String,
    required: true,
  },
  tags: Array,
});

const model = mongoose.model('movies', mySchema);
module.exports = model;
