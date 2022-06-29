const log = console.log;

import fs from 'fs';

let readableStream = fs.createReadStream('fileTest.txt');
let data = '';
readableStream.setEncoding('UTF8');
readableStream.on('data', (chunk) => {
  // log(chunk); // Buffer
  log(chunk);
  data += chunk;
});
readableStream.on('end', () => {
  log(data);
});