import fs from 'fs';

console.log('start');
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if(err){
        console.error('Whoops!');
    } else {
        console.log(data);
    }
});

console.log('end');
