const log = console.log;

import fs from 'fs';

let readableStream = fs.createReadStream('fileTest.txt');
let data = '';
readableStream.setEncoding('UTF8'); // Lo decodifica en este formato, ya no es necesario usar toString()
readableStream.on('data', (chunk) => {
  log(chunk); // Buffer
  data += chunk;
});
readableStream.on('end', () => {
  log(data);
});

// process.stdout ya es un buffer de escritura
process.stdout.write('hello ');
process.stdout.write('world');

const upperCaseTransform = new stream.Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase()); // enviar la data
  }
});

const readableStream2 = fs.createReadStream('fileTest.txt');

readableStream2.pipe(upperCaseTransform).pipe(process.stdout)
