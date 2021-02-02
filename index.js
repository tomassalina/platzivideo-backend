const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const db = require('./db');

const morgan = require('morgan');
const cors = require('cors');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');

db(
  `mongodb://${config.dbUser}:${config.dbPassword}@cluster0-shard-00-00.fs27v.mongodb.net:27017,cluster0-shard-00-01.fs27v.mongodb.net:27017,cluster0-shard-00-02.fs27v.mongodb.net:27017/${config.dbName}?ssl=true&replicaSet=atlas-djw3ne-shard-0&authSource=admin&retryWrites=true&w=majority`
);

// HTTP request logger
app.use(morgan('dev'));

// enable CORS
app.use(cors());

// body-parser
app.use(express.json());

// routes
moviesApi(app);

// catch 404
app.use(notFoundHandler);

// errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening in http://localhost:${config.port}`);
});
