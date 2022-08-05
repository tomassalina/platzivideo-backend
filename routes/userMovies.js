const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const UserMoviesService = require('../services/userMovies');

// middlewares
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

// JWT strategy
require('../utils/auth/strategies/jwt');

function userMoviesApi(app) {
  const router = express.Router();

  app.use('/api/user-movies', router);

  const userMoviesService = new UserMoviesService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-movies']),
    async (req, res, next) => {
      const userId = req.user.id;

      if (!userId) return next(boom.badRequest('userId is required'));

      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });

        res.status(200).json({
          data: userMovies,
          message: 'user movies listed',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:user-movies']),
    async function (req, res, next) {
      const userId = req.user.id;
      const { movieId } = req.body;

      try {
        const createdUserMovieId = await userMoviesService.createUserMovies({
          userId,
          movieId,
        });

        res.status(201).json({
          data: createdUserMovieId,
          message: 'user movie created',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:userMovieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:user-movies']),
    async (req, res, next) => {
      const { userMovieId } = req.params;

      try {
        const deletedUserMovieId = await userMoviesService.deleteUserMovie({
          userMovieId,
        });

        res.status(200).json({
          data: deletedUserMovieId,
          message: 'user movie deleted',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = userMoviesApi;
