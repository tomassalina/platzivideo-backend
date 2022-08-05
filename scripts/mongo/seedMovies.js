// node scripts/mongo/seedMovies.js

const MongoLib = require('../../lib/movies.mongo');
const { moviesMock } = require('../../utils/mocks/movies');
const { config } = require('../../config');
const db = require('../../db');

async function seedMovies() {
  try {
    const mongoDB = new MongoLib();

    const promises = moviesMock.map(async (movie) => {
      await mongoDB.create(movie);
    });

    await Promise.all(promises);
    console.log(`${promises.length} movies have been created succesfully`); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

db(
  `mongodb+srv://${config.dbUser}:${config.dbPassword}@cluster0.pdajoye.mongodb.net/?retryWrites=true&w=majority`
);

seedMovies();
