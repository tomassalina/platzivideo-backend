const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MovieServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MovieServiceMock,
  });

  const request = testServer(route);

  describe('GET /movies', () => {
    it('should response with status 200', (done) => {
      request.get('/api/movies/').expect(200, done);
    });

    it('shoul response with the list of movies', (done) => {
      request.get('/api/movies/').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed',
        });

        done();
      });
    });
  });
});
