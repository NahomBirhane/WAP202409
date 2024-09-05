function sum(x, y, ...rest) {
    console.log(rest);
    return x + y + rest.reduce((accum, elem) => accum + elem);
}

console.log(sum(1, 2, 3));
console.log(sum(2, 6, 7, 8, 9, 5, 3));

// function sum(){
//     console.log(arguments);//implicit object - array-like object, but not array
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(sum(1,2,3, 9, 10));

// const obj = {
//     0: 2,
//     1: 5,
//     2: 'Hello',
//     length: 3
// }

// for(let i = 0; i < obj.length; i++){
//     console.log(obj[i]);
// }
