// import configuration, this has to run first
import { config } from './configs/env';

// import dependencies
import server from './server';
import db from './configs/db';

// run
const app = server.listen(config.port);
db.init();

// graceful shutdown
process.on('SIGTERM', () => {
  db.close();
  app.close();
});
