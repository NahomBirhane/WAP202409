class Course1 {
    public code: string = "472";
    name: string = "WAP";
}

const wap = new Course1;
console.log(wap.code);
console.log(wap.name);
wap.code = '333';
console.log(wap.code);

class Student2 {
    constructor(public id: number, public firstname: string, 
        public lastname: string, public age: number, public major: string) { }
}

const mystu = new Student2(1001, 'lily', 'smith', 20, 'CS');
console.log(mystu);


// class Student1 {
//     id: number;
//     firstname: string;
//     lastname: string;
//     age: number;
//     major: string;
//     constructor(id: number, firstname: string, lastname: string, age: number, major: string) {
//         this.id = id;
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.major = major;
//     }

//     computeInfo(): string {
//         return `${this.id} ${this.firstname}`
//     }
// }



