import express from 'express';

const log = console.log;
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
  res.send('Method GET');
});

app.post('/', (req, res) =>{
  log(req.body);
  log(req.query);
  res.send({body: req.body, query: req.query});
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
