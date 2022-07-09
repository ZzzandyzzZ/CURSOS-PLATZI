import express, { Application } from 'express';
import morgan from 'morgan';

import config from './config';
import routes from './network/routes';
import { logError, boomErrorHandler } from './middlewares/error.handler';

const app:Application = express();
const { port, host } = config;

console.clear();
app.use(morgan('dev'));
app.use(express.json());

routes(app);

app.use(logError);
app.use(boomErrorHandler);

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
