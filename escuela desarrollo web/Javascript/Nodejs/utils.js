import bcrypt from 'bcrypt';

const password = 'Andy';

bcrypt.hash(password, 5 , (err, hash) => {
  log(hash);
  bcrypt.compare(password, hash, (err, res) => {
    log(res);
  });
});

import moment from 'moment';
let now = moment();
log(now.toString());
log(now.format('YYYY/MM/DD - HH:mm'));

import sharp from 'sharp';

sharp('img/nodejs.png')
  .resize(20)
  .grayscale()
  .toFile('img/resized.jpg')
export {log};