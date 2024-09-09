console.log('start');
const id = setInterval(() => console.log('Hi'), 1000);
setTimeout(() => clearInterval(id), 5000);
console.log('end');