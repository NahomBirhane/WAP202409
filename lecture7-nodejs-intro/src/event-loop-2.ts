console.log('start');

setTimeout(() => { console.log('timeout 1') }, 0);
setTimeout(() => {
    console.log("this is setTimeout 2");
    process.nextTick(() =>
        console.log("this is inner nextTick inside setTimeout")
    );
}, 0);
setTimeout(() => { console.log('timeout 3') }, 0);

new Promise(resolve => resolve('success'))
    .then(() => console.log('Promise...1'));
new Promise(resolve => resolve('success'))
    .then(() => console.log('Promise...2'));

process.nextTick(() => console.log('nextTick 1'));
process.nextTick(() => console.log('nextTick 2'));

console.log('end');