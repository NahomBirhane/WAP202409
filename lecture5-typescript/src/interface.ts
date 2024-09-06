interface IEmployee {
    firstname: string;
    lastname: string;
    age: number;

    setEmployee(firstname: string, lastname: string, age: number): void;
    // setEmployee2: (firstname: string, lastname: string, age: number) => void;
    printEmployee: () => string;
}

const john: IEmployee = {
    firstname: 'John',
    lastname: 'Smith',
    age: 20,
    setEmployee(firstname: string, lastname: string, age: number): void {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    },
    printEmployee: function() {
        return `${this.firstname} ${this.lastname} ${this.age}`;
    }
}

console.log(john.printEmployee());