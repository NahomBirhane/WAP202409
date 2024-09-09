async function foo(){
    throw new Error('Whoops');
}

async function test(){
    try {
        await foo();
    } catch(e){
        console.log('inside catch block');
    }
}
test();
