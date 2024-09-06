class Course {
    name: string;
    constructor(name: string) {
        // this = {}
        this.name = name;
        // return this;
    }

    getCourseInfo(){
        return this.name;
    }
}

class WAP extends Course {
    code: number;
    constructor(code: number, name: string) {
        let i = 0;
        console.log('hello');
        super(name);
        this.code = code;
    }

    getCourseInfo(){
       return super.getCourseInfo() + this.code;
    }
}