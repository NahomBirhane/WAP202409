// function sum(num1, num2, num3=90) {
//     console.log(num1, num2, num3);
//     return num1 + num2 + num3;
// }

// console.log(sum(1, 2, 8));

// function sayHi(username){
//     console.log(`Hi, ${username}`);
//     // return undefined
// }

// const result = sayHi('John');
// console.log(result);
// console.log(sayHi('John'));

// no function overloading
function log(){
    console.log(`Log without no params`);
}

function log(param1){
    console.log(`Log with 1 param: ${param1}`);
}

function log(param1, param2){
    console.log(`Log with 2 params: ${param1} ${param2}`);
}

log('hi', 'world', 'dfdfss');