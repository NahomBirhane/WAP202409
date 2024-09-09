const foo = () => {
    console.log('1');
}
console.log('start');
setTimeout(foo, 4000);
console.log('2');
setTimeout(() => {
    console.log('3');
}, 0);
console.log('end');