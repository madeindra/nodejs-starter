// import configuration
import { db } from '../env';

// import dependencies
import { Db, MongoClient } from 'mongodb';

// set connection
let client: MongoClient;
let dbConnection: Db;

// export database functions
async function init(): Promise<void>{
  client = new MongoClient(db.uri)
  
  await client.connect();
  dbConnection = client.db(db.database);
}

async function close():Promise<void> {
  return client.close();
}

function get(): Db {
  return dbConnection;
}

export default {
  init,
  close,
  get,
}
