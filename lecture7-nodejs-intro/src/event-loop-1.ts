console.log('start');
process.nextTick(() => console.log('nextTick'));
new Promise(resolve => resolve('success'))
    .then(() => console.log('Promise...'));
console.log('end');