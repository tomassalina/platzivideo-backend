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
  `mongodb://${config.dbUser}:${config.dbPassword}@cluster0-shard-00-00.lc6ir.mongodb.net:27017,cluster0-shard-00-01.lc6ir.mongodb.net:27017,cluster0-shard-00-02.lc6ir.mongodb.net:27017/${config.dbName}?ssl=true&replicaSet=atlas-djw3ne-shard-0&authSource=admin&retryWrites=true&w=majority`
);
seedMovies();
