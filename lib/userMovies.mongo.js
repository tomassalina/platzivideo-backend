const Model = require('../utils/schemas/userMovies');

class MongoLib {
  getAll(userId) {
    return new Promise((resolve, reject) => {
      Model.find(userId)
        .populate('users')
        .exec((err, populated) => {
          if (err) {
            return reject(err);
          }

          return resolve(populated);
        });
    });
  }

  create(data) {
    const myUserMovie = new Model(data);
    return myUserMovie.save().then((results) => results._id);
  }

  delete(userMovieId) {
    return Model.deleteOne({ _id: userMovieId }).then(() => userMovieId);
  }
}

module.exports = MongoLib;
