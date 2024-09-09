import fs from 'fs';

fs.createReadStream('hello.txt', 'utf-8')
    .pipe(fs.createWriteStream('destination.txt'));