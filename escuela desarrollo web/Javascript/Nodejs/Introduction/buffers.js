const log = console.log;
// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 3]);
let buffer = Buffer.from('Hello');
log(buffer);
log(buffer.toString());

let abc = Buffer.alloc(26);
for(let i=0; i<26; i++) {
  abc[i] = i + 97;
}
log(abc.toString());