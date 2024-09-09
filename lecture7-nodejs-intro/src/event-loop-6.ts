import * as fs from 'fs';

const readableStream = fs.createReadStream('hello.txt');
readableStream.close();

readableStream.on("close", () => {
    console.log("this is from readableStream close event callback");
});

setImmediate(() => console.log('Immediate'));
process.nextTick(() => console.log('nextTick'));