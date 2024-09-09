async function baz(){
    const p = new Promise(resolve => resolve('success'));
    const result = await p;
    console.log(result);
}

baz();