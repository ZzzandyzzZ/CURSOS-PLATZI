import express, { Application } from 'express';

import routes from './network/routes';
import db from './db';

console.clear();
const app:Application = express();
const port = 3000;

db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.use('/app', express.static('src/public'));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
