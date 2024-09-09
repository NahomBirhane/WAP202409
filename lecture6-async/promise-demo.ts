console.log('start');

new Promise((resolve, reject) => {
    // type of resolve and reject must be function
    console.log('inside promise 1');
    resolve([1, 3, 5]); //async - success
    // reject(new Error('Whoops!')); //async
    console.log('inside promise 2');
}).then(data => console.log('inside then: ', data))
  .catch(err => console.error('inside catch: ', err.message));

console.log('end');