const Model = require('../utils/schemas/apiKeys');

class MongoLib {
  getAll(token) {
    return Model.find(token);
  }

  create(data) {
    const myApiKeys = new Model(data);
    return myApiKeys.save().then((results) => results._id);
  }
}

module.exports = MongoLib;
