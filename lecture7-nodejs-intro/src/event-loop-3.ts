import * as fs from 'fs';

console.log('start');
fs.readFile('hello.txt', () => console.log('readFile 1'));
new Promise(resolve => resolve('Hi')).then(() => console.log("Promise 1"));
process.nextTick(() => console.log("nextTick 1"));
console.log('end');