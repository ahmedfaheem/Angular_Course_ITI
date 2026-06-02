export class Student {
   /* id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
*/
  // can be written in a shorter way using parameter properties
    constructor(public id: number, public name: string, public age: number) {
    }
}
