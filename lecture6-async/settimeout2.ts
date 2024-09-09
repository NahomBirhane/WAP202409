// const greeting = (firstname, lastname) => {
//     console.log(`Hi, ${firstname} ${lastname}`)
// }
// console.log('start');
// setTimeout(greeting, 1000, 'john', 'smith');
// console.log('end');

// const greeting = (firstname, lastname) => {  
//     return function(){
//         console.log(`Hi, ${firstname} ${lastname}`);
//     }
// }
// console.log('start');
// setTimeout(greeting('john', 'smith'), 1000);
// console.log('end');


const greeting = (firstname, lastname) => {
    console.log(`Hi, ${firstname} ${lastname}`)
}
console.log('start');
setTimeout(() => greeting('john', 'smith'), 1000);
console.log('end');