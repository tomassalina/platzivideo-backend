const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const UsersService = require('../../../services/users');
const { config } = require('../../../config');

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
      const usersService = new UsersService();

      try {
        const user = await usersService.getUser({
          email: tokenPayload.sub.email,
        });

        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        delete user._doc.password

        const parsedUser = {
          id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        }

        cb(null, { ...parsedUser, scopes: tokenPayload.sub.scopes });
      } catch (error) {
        return cb(error);
      }
    }
  )
);
