// stack
const arr = [1, 5, 8, 9];
arr.push('Hi');
console.log(arr);
arr.pop();
arr.pop();
console.log(arr);

console.log('-------------------------');
const countries = ['US', 'Canada'];
countries.unshift('Ethiopia');
console.log(countries);
countries.shift();
console.log(countries);

// queue - First in first out
const names = [];
names.push('banana');
names.push('apple');
// [banana, apple]
names.shift();
// [apple]
names.push('strawberry');
// [apple, strawberry]
names.shift();
console.log(names); //[strawberry]

const fruit = ['strawberry', 'strawberry', 'strawberry']
