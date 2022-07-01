import {Router} from 'express';

import {success, error} from '../../network/response.js';

const router = Router();

router.get('/', (req, res) =>{
  res.header({'custom': 'value1'});
  if (req.query.ok === 'false') {
    error(req, res, 'Intensional error', 500, 'it was on purpose');
    return;
  }
  success(req, res, 'Hello grom get', 200);
});

router.post('/', (req, res) =>{
  // log(req.body);
  // log(req.query);
  res.send({body: req.body, query: req.query});
});

export default router;
