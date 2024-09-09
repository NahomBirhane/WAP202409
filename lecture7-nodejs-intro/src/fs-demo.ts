import * as fs from 'fs';

fs.readFile('hello2.txt', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('read successfully!');
    }
});