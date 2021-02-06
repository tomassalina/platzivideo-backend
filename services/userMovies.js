const MongoLib = require('../lib/userMovies.mongo');

class UserMoviesService {
  constructor() {
    this.mongoDB = new MongoLib();
  }

  async getUserMovies({ userId }) {
    const query = userId && { userId: userId };
    const userMovies = await this.mongoDB.getAll(query);

    return userMovies || [];
  }

  async createUserMovies({ userMovie }) {
    const createdUserMovieId = await this.mongoDB.create(userMovie);
    return createdUserMovieId;
  }

  async deleteUserMovie({ userMovieId }) {
    const deletedUserMovieId = await this.mongoDB.delete(userMovieId);
    return deletedUserMovieId;
  }
}

module.exports = UserMoviesService;
