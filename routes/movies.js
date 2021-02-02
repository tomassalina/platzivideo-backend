const express = require('express');
const MoviesService = require('../services/movies');

// const {
//   movieIdSchema,
//   createMovieSchema,
//   updateMovieSchema,
// } = require('../schemas/movies');

// const validationHanlder = require('../utils/middleware/validationHandler');
// No necesitamos un validationHandler ni esos esquemas ya que estamos utilizando mongoose

const moviesApi = (app) => {
  const router = express.Router();

  app.use('/api/movies', router);

  const movieService = new MoviesService();

  router.get('/', async (req, res, next) => {
    const { genre: tags } = req.query;

    try {
      const movies = await movieService.getMovies({ tags });
      // throw new Error('Error getting movies');

      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;

    try {
      const movie = await movieService.getMovie({ movieId });

      res.status(200).json({
        data: movie,
        message: 'movie retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: movie } = req;

    try {
      const createdMovieId = await movieService.createMovie({ movie });

      res.status(201).json({
        data: createdMovieId,
        message: 'movie created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    const { body: movie } = req;

    try {
      const updatedMovieId = await movieService.updateMovie({ movieId, movie });

      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.patch('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    const { body: movie } = req;

    try {
      const updatedMovieId = await movieService.updateMovie({ movieId, movie });

      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;

    try {
      const deletedMovieId = await movieService.deleteMovie({ movieId });

      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted',
      });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = moviesApi;
