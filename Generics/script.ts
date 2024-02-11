//Function with Generics

// A simple identity function using generics
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<string>("hello");
console.log(result); // Output: "hello"

let numberResult = identity<number>(400);
console.log(numberResult); // Output: 400

//Generic Classes

// A simple generic class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value
    }
}

let boxOfString = new Box<string>("hello");
console.log(boxOfString.getValue()); // Output: "hello"

let boxOfNumber = new Box<number>(14);
console.log(boxOfNumber.getValue()); // Output: 14


//Generic Interfaces

// A generic interface
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<string, number> = { first: "one", second: 2 };
console.log(pair) // Output: { first: "One", second: 2 }


