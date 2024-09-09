import fs from 'fs';

fs.writeFile('destination.txt', 'Hello World', 'utf-8', (err) => {
    console.log(err);
});


    