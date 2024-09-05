const person = {
    firstname: 'John',
    lastname: 'Smith',
    printFullname: function() { //syntax 1: to define a method
        console.log(`${this.firstname} ${this.lastname}`);
    },
    'my age': 20,
    getFirstname() { //syntax 2: define a method
        return this.firstname;
    }
};

console.log(person.firstname); //get
person.firstname = 'Edward'; //set
console.log(person.firstname);

// let property_name = 'printFullname';
// console.log(person[property_name]);

// console.log(person['my age']);

// console.log(person.firstname);
// console.log(person.lastname);
// person.printFullname();
// console.log(person.printFullname());
// 1. person.printFullname() return result
// 2. console.log(result)

// console.log(person['firstname']);
// console.log(person['lastname']);
// person['printFullname']();