// Union Types

// Defining a union type
let myVar: string | number;

// myVar can now hold values of type string or number
myVar = "hello"
myVar = 42;
// myVar = true; // This would cause an error, as it's not a string or a number


// Intersection Types

// Defining some types
interface Printable {
    print(): void;
}

interface Loggable {
    log(): void;
}

// Defining an intersection type
type LoggableAndPrintable = Printable & Loggable;

// Implementing the interfaces
class MyClass implements LoggableAndPrintable {
    print() {
      console.log("Printing...");
    }
    log() {
      console.log("Logging...");
    }
}


// Using an object of the intersection type
function process(obj: LoggableAndPrintable) {
  obj: print();
  // obj: log();
}

const obj = new MyClass();
process(obj); // This will work because MyClass implements both Printable and Loggable interfaces