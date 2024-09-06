let notSure: any = true; //notSure boolean
notSure = 'Hello';
notSure = 123;

let isDone: boolean = true;

let user: [number, string, string, number, boolean, string]
    = [1001, 'John', 'Smith', 20, false, 'Faculty'];


let family: [number, string][] = [[1, 'John'], [2, 'Edward'], [3, 'Lily']];

let course: (string | number) = 472;
course = 'WAP';

const fruits2: string[] = ['banana', 'strawberry', 'apple'];

const countries: Array<string> = ['US', 'Canada'];

const arr: (string | number)[] = [1, 3, 'abc', 4, 6, 'def', 'ddd', 'qq'];
const arr2: Array<string | number> = [1, 3, 'abc', 4, 6, 'def', 'ddd', 'qq'];
arr2.push(9);
arr2.push('abc');
// arr.push(true);


// function test(id: number){
//     console.log(id);
// }

// let myid: unknown = 'abc';
// test(myid);
