const MongoLib = require('../lib/movies.mongo');

class MoviesService {
  constructor() {
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags, query }) {
    let filter = {};

    if (tags) filter = { tags: { $in: tags } };
    if (query) filter = { ...filter, title: { $regex: query, $options: 'i' } };

    const movies = await this.mongoDB.getAll(filter);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(movieId);
    return movie || {};
  }

  async createMovie({ movie }) {
    const createdMovieId = await this.mongoDB.create(movie);
    return createdMovieId;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = await this.mongoDB.update(movieId, movie);
    return updatedMovieId;
  }

  async deleteMovie({ movieId }) {
    const deletedMovieId = await this.mongoDB.delete(movieId);
    return deletedMovieId;
  }
}

module.exports = MoviesService;
