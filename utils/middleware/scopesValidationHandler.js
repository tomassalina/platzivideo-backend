const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
  return function (req, res, next) {
    if (!req.user || (req.user && !req.user.scopes)) {
      next(boom.unauthorized('Missing scopes'));
    }

    const hasAccess = allowedScopes
      .map((allowedScope) => req.user.scopes.includes(allowedScope))
      .find((allowed) => Boolean(allowed));

    if (hasAccess) {
      console.log('has access');
      next();
    } else {
      console.log('not has access');
      next(boom.unauthorized('Insufficient scoopes'));
    }
  };
}

module.exports = scopesValidationHandler;
