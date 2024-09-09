console.log('start');
setTimeout(() => console.log('timeout'), 0);
new Promise(resolve => {
    resolve('promise');
}).then(console.log);

console.log('end');

