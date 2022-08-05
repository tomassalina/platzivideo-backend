const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: 'users',
    required: true,
  },
  movieId: {
    type: Schema.ObjectId,
    ref: 'movies',
    required: true,
  },
});

const model = mongoose.model('user_movies', mySchema);
module.exports = model;
