import express from 'express';

import routes from './network/routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

app.use('/app', express.static('public'));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
