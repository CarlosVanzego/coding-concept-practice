// Function overload signatures
function combine(x: string, y: string): string;
function combine(x: number, y: number): number;
function combine(x: string | number, y: string | number): string | number {
    if (typeof x === "string" && typeof y === "string") {
        return x + y;
    } else if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else {
        throw new Error("Unsupported types");
    }
}

// Function call with string arguments
const result1: string = combine("Hello, ", "world!");
console.log(result1); // Output: Hello, world!

// Function call with number arguments
const result2: number = combine(5, 10);
console.log(result2); // Output: 15