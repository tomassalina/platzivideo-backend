const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: Boolean,
  apiKeyToken: String,
});

const model = mongoose.model('users', mySchema);
module.exports = model;
