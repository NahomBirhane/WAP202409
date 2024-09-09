import {promises as fs} from 'fs';

fs.writeFile('destination.txt', 'Hello World', 'utf-8')
    .catch(err => console.log(err));


    