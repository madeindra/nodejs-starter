// initialize dotenv
require('dotenv').config();

// initiating configurations
module.exports = {
  app: {
    mode: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '8000',
  },
  db: {
    uri: process.env.MONGO_URI || 'mongodb+srv://username:password@localhost',
    database: process.env.MONGO_DATABASE || 'database',
  },
};
