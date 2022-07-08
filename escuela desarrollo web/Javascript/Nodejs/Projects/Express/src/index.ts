import express, { Application } from 'express';
import morgan from 'morgan';

import config from './config';

const app:Application = express();
const { port, host } = config;

console.clear();

app.use(morgan('dev'));

app.use('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
