// import dependencies
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { default: helmet } = require('helmet');
const { default: pino } = require('pino-http');

// initialize express
const app = express();

// apply middlewares
app.use(cors()); // for cors setting, remember to setup this properly in production
app.use(helmet()); // for securing response headers
app.use(pino()); // for logging http

// apply body parser
app.use(express.json());
app.use(multer().any());

// export app
module.exports = app;
