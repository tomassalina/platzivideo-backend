const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apiKeysSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  scopes: {
    type: Array,
    required: true,
  },
});

const model = mongoose.model('api-keys', apiKeysSchema);
module.exports = model;
