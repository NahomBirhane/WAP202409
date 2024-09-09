console.log('start');

async function bar(){
    console.log('inside bar');
    throw new Error('Whoops!');
}
const res2 = bar();
console.log('res: ', res2.catch(e => console.log(e.message)));

console.log('end');