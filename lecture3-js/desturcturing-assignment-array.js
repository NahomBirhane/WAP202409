const fruit = ['banana', 'apple', 'strawberry'];
const var1 = fruit[0];
const var2 = fruit[1];

const [, f1, f2] = fruit;
console.log(f1, f2);

let user = {};
// user.firstname = "John Smith".split(' ')[0];
// user.lastname = "John Smith".split(' ')[1];
[user.firstname, user.lastname] = "John Smith".split(' '); //['John', "Smith"]
console.log(user);