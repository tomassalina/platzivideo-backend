const express = require('express');
const passport = require('passport');
const MoviesService = require('../services/movies');

// utils
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

// middlewares
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

// JWT strategy
require('../utils/auth/strategies/jwt');

const moviesApi = (app) => {
  const router = express.Router();

  app.use('/api/movies', router);

  const movieService = new MoviesService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    async (req, res, next) => {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { genre: tags, query } = req.query;

      try {
        const movies = await movieService.getMovies({ tags, query });

        res.status(200).json({
          data: movies,
          message: 'movies listed',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    async (req, res, next) => {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
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
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:movies']),
    async (req, res, next) => {
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
    }
  );

  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    async (req, res, next) => {
      const { movieId } = req.params;
      const { body: movie } = req;

      try {
        const updatedMovieId = await movieService.updateMovie({
          movieId,
          movie,
        });

        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.patch(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    async (req, res, next) => {
      const { movieId } = req.params;
      const { body: movie } = req;

      try {
        const updatedMovieId = await movieService.updateMovie({
          movieId,
          movie,
        });

        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:movies']),
    async (req, res, next) => {
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
    }
  );
};

module.exports = moviesApi;
