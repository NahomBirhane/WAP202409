import * as fs from 'fs';

fs.readFile('hello.txt', () => {
    console.log('this is readFile 1');
    setImmediate(() => {console.log('Immediate 1')});
});


