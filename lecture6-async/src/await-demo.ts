console.log('start');

async function foo(){
    console.log('inside foo');
    return 'foo'; //new Promise(resolve => resolve('foo'))== Promise.resolve('foo')
}

async function bar() {
    console.log('inside bar - start');
    const result = await foo();
    console.log('result...', result);
    console.log('inside bar - end');
}
bar();
console.log('end');