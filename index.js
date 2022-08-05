const express = require('express');
const app = express();

const { config } = require('./config/index');
const db = require('./db');

const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');

const morgan = require('morgan');
const cors = require('cors');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');

db(
  `mongodb+srv://${config.dbUser}:${config.dbPassword}@cluster0.pdajoye.mongodb.net/?retryWrites=true&w=majority`
);

// HTTP request logger
app.use(morgan('dev'));

// enable CORS
app.use(cors());

// body-parser
app.use(express.json());

// routes
moviesApi(app);
userMoviesApi(app);
authApi(app);

// catch 404
app.use(notFoundHandler);

// errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening in http://localhost:${config.port}`);
});
