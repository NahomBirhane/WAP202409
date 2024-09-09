console.log('start');

async function foo(){
    console.log('inside foo');
    return 'foo'; //new Promise(resolve => resolve('foo'))== Promise.resolve('foo')
}
const res = foo();
console.log('res: ', res);

console.log('end');