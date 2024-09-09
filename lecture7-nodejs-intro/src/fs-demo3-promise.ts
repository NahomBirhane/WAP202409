import { promises as fs } from 'fs';

fs.readFile('hellodfdfd.txt', 'utf8')
    .then(data => console.log(data))
    .catch(e => console.log(e.message));
