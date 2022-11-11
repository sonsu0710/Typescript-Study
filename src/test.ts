


/**
 * index signature
 */
interface someOneInterface {
    [index: string] : string | number
    name: string;
    age: number;
    born: string;
}
const someOne: someOneInterface = {
    name: 'Kim',
    age: 21,
    born: 'Busan'
}
for (let prop in someOne) {
    console.log(`${prop} ${someOne[prop]}`);
}

class Person {
    [index: string] : string | number
    name: string;
    age: number;
    born: string;
    constructor(name: string, age: number, born: string) {
        this.name = name;
        this.age = age;
        this.born = born;
    }
}

const lee = new Person('Lee', 28, 'Busan');
for (let prop in lee) {
    console.log(`${prop} ${lee[prop]}`);
}

export {}