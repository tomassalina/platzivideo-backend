const Model = require('../utils/schemas/users');

class MongoLib {
  getAll(email) {
    return Model.find(email);
  }

  get(id) {
    const user = Model.findOne({ _id: id });
    return user;
  }

  create(data) {
    const myUser = new Model(data);
    return myUser.save().then((results) => results._id);
  }
}

module.exports = MongoLib;
