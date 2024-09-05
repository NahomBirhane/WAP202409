// // 1. function declaration
// function square(number){
//     return number * number;
// }
// const result = square(5);
// console.log(result);


// 2. function expression
// const sum = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(3, 6));

// const fibnacci = function fib(n) {
//     if(n === 1 || n === 0) return 1;
//     return fib(n-1) + fib(n-2);
// }

// function demo(){
//     return function() {
//         console.log('hello');
//     }
// }

// 3. Arrow function
// const substract = (num1, num2) => {
//     return num1 - num2;
// }

const substract = (num1, num2) => num1 - num2;
console.log(typeof substract)

console.log(substract(9, 3));

const square = number =>  number * number;

console.log(typeof square);
console.log(square(6));

const foo = () => 'Hello';
console.log(typeof foo);
console.log(foo());