function processData(data: unknown) {
    if (typeof data === 'string') {
        // data is narrowed down to type string
      console.log(data.toUpperCase());
    } else if (Array.isArray(data)) {
        // data is narrowed down to type array
        console.log(data.length)
    } else {
      console.log("Data is of type unknown");
    }
}

let myData: unknown = "Hello, TypeScript!";
processData(myData); // Output: HELLO, TYPESCRIPT!

myData = [1,2,3,4,5,];
processData(myData); // Output: 5

myData = { name: "Carlos", age: 27 };
processData(myData); // Output: Data is of unknown type

// In this example, processData function accepts a parameter of type unknown. Inside the function, we use type guards (typeof and Array.isArray) to narrow down the type of data and perform operations accordingly. If the type cannot be narrowed down, data remains of type unknown.