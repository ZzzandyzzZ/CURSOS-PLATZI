import express, { Application } from 'express';
import morgan from 'morgan';

import config from './config';
import routes from './network/routes';

const app:Application = express();
const { port, host } = config;

console.clear();

app.use(morgan('dev'));
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
