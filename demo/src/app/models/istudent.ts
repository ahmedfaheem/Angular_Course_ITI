export interface IStudent {
    id: number;
    name: string;
    age: number;
}
/* 
 use it instead of class when you only need to define the shape of an object without implementation details,
  ng g i  models/IStudent
*/