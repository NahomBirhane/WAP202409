abstract class Student {
    id: number;
    firstname: string;
    lastname: string;
    abstract age: number;

    constructor(id: number, firstname: string, lastname: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    abstract computeInfo(): string;
}

class MyStudent extends Student{
    age: number;
    major: string;
    constructor(id: number, firstname: string, lastname: string, age: number, major: string){
        super(id, firstname, lastname);
        this.age = age;
        this.major = major;
    }

    computeInfo(): string {
        return `${this.id} ${this.firstname}`
    }
}

const stu1 = new MyStudent(1001, 'john', 'smith', 20, 'CS');