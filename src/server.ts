// import dependencies
import express, { Express } from 'express';
import cors from 'cors';
import multer from 'multer';
import helmet from 'helmet';
import pino from 'pino-http';

// initialize express
const server: Express = express();

// apply middlewares
server.use(cors()); // for cors setting, remember to setup this properly in production
server.use(helmet()); // for securing response headers
server.use(pino()); // for logging http

//TODO: import routers

// apply body parser
server.use(express.json());
server.use(multer().any());

// export server
export default server;