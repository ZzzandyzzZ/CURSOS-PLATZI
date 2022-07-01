import express from 'express';
import {success, error} from './network/response.js';
const log = console.log;
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
  log(req.headers);
  res.header({'custom': 'value1'});
  success(req, res, 'Hello grom get', 200);
});

app.post('/', (req, res) =>{
  // log(req.body);
  // log(req.query);
  res.send({body: req.body, query: req.query});
});

app.use('/app', express.static('public'));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
