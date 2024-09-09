import fs from 'fs';

const readable = fs.createReadStream('hello.txt', {
    encoding: "utf-8",
    highWaterMark: 1024
});
let total: string;
// by default, 16KB
readable.on('data', data => {
    console.log(data);
    total += data;
});

readable.on('end', () => {
    console.log('Finished');
    // fs.createWriteStream('destination.txt', total);
});

readable.on('error', (err) => {
    console.log(err.message);
})