console.log('start');
process.nextTick(() => {console.log('nexttick')});
console.log('end');