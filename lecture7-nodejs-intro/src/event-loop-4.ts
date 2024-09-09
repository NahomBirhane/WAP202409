import * as fs from 'fs';

fs.readFile('hello.txt', () => console.log('this is readFile 1'));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 2000000000; i++) {}

