const Model = require('../utils/schemas/movies');

class MongoLib {
  getAll(tags) {
    return Model.find(tags);
  }

  get(id) {
    const movie = Model.findOne({ _id: id });
    return movie;
  }

  create(data) {
    const myMovie = new Model(data);
    return myMovie.save().then((results) => results._id);
  }

  update(id, data) {
    return Model.updateOne({ _id: id }, data).then(() => id);
  }

  delete(id) {
    return Model.deleteOne({ _id: id }).then(() => id);
  }
}

module.exports = MongoLib;
