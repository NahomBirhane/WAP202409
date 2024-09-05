const countries = ['Ethiopia', 'US', 'Canada'];
// const result = countries.filter(c => c.length > 6);
// const result = countries.filter((elem, index, array) => {
//     console.log(`elem: ${elem}`);
//     console.log(`index: ${index}`);
//     console.log('Entire array: ', array);
//     return elem.length > 6;
// });

// const result = countries.map((elem, index) => index);
// const result = countries.filter(elem => elem.length > 6)
//                         .map(elem => elem.toUpperCase())

// console.log(result);

// let numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accum, elem, index, array) => accum + elem, 0);
// console.log(sum);

// average grade which grade is greater than 80
const grades = [90, 80, 70, 98, 88, 85];
// let filtered = grades.filter(g => g > 80);
// const result = filtered.reduce((accu, grade) => accu + grade) / filtered.length;

let result =  grades.filter(grade => grade > 80)
    .reduce((accum, elem, index, array) => accum + elem / array.length, 0);
console.log(result);