class Employee {
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    setFirstname(firstname: string): void {
        this.firstname = firstname;
    }

    getFirstname(): string {
        return this.firstname;
    }
}

const john2 = new Employee('John', 'Smith', 20);
console.log(john2);