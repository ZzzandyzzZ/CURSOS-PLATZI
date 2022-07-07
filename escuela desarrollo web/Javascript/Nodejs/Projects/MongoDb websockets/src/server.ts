import express, { Application } from 'express';
import http from 'http';

import { connect } from './socket';
import routes from './network/routes';
import db from './db';

console.clear();
const app:Application = express();
const port = 3000;
const server = http.createServer(app);
connect(server);
db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.use('/app', express.static('src/public'));

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
