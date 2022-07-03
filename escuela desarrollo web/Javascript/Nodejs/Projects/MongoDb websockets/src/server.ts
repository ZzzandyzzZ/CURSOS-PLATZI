import express, { Application } from 'express';

import routes from './network/routes';

const app:Application = express();
const port:number = 3000;

console.clear();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.use('/app', express.static('public'));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
