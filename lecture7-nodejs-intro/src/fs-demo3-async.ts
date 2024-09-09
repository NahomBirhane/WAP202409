import { promises as fs } from 'fs';

async function foo() {
    try {
        const data = await fs.readFile('hello.txt', 'utf-8');
        console.log(data);
    } catch (e: any) {
        console.log(e.message);
    }
}

foo();
