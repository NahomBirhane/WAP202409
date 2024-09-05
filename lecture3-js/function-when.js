// Arrow function is suitable for non-method functions

// because in arrow function, there's no this keyword
// this keyword will refer to the surrounding environment
// in this example, this = 
// console.log(this);

const person = {
    firstname: 'John',
    lastname: 'Smith',
    printFullname: function() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
};
person.printFullname();
// console.log(person.age);