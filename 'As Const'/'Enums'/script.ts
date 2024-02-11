// Without 'as const'
// const obj = { name: 'Carlos', age: 27 }; // TypeScript infers { name: string; age: number; }
obj.name = 'Taylor'; // Allowed because TypeScript infers string for name


// With 'as const'
const obj2 = { name: 'Carlos', age: 27 } as const // TypeScript infers { readonly name: "John"; readonly age: 30; }
// obj2.name = 'Taylor'; // This would cause an error because name is readonly now



// Numeric Enums
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let dir: Direction = Direction.Up;
console.log(dir); //Output: 0

// String Enums
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

let color: Color = Color.Red;
console.log(color); // Output: "RED"