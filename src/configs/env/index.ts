// import dotenv
import dotenv from 'dotenv';

// init function
dotenv.config({ path: __dirname + '/../../../.env' });

// configurations
export const config = Object.freeze({
  mode: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '8000',
});

export const db = Object.freeze({
  uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
  database: process.env.MONGO_DATABASE || 'database',
});
