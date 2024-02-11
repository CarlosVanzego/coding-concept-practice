// Example of a declaration file (example.d.ts)

// Declaration for a simple function
declare function greet(name: string): void;

// Declaration for an interface
interface Person {
    name: string;
    age: number;
}

// Declaration for a class
declare class Car {
    constructor(make: string, model: string);
    start(): void;
    stop(): void;
}

// Declaration for a global variable
declare const VERSION: string;


// Using the declarations from the example.d.ts file
greet("Alice"); // TypeScript knows that greet takes a string argument

const person: Person = { name: "Bob", age: 30 }; // TypeScript provides type checking for the Person interface

const myCar = new Car("Toyota", "Camry"); // TypeScript provides type checking for the Car class
myCar.start(); // TypeScript knows that myCar has start and stop methods

console.log(VERSION); // TypeScript knows the type of VERSION