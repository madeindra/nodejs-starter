// import mongo
const { MongoClient } = require('mongodb');

// get connection & db string
const { db: { uri } } = require('../env');
const { db: { database } } = require('../env');

// set connection
const client = new MongoClient(uri);
let dbConnection;

// export database
module.exports = {
  init: async () => {
    await client.connect();
    dbConnection = client.db(database);
  },
  close: () => client.close(),
  getDB: () => dbConnection,
};
