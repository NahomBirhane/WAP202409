import fs from 'fs';
console.log('start');
const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);
console.log('end');