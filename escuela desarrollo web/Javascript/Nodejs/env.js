let name = process.env.NAME;
console.log('Hola ', name);

require('dotenv').config();
let nameFile = process.env.NAME_FILE;
console.log('Hola ', nameFile);
