// Declaring a tuple type
let tuple: [string, number];

// Initializing a tuple
tuple = ["hello", 14];

// Accessing elements
console.log(tuple[0]) // Output: "hello"
console.log(tuple[1]) // Output: 14

// Tuple type inference
let anotherTuple = ["world", 27]; // TypeScript infers the type as [string, number]
