import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Method GET');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
