// 'readonly' keyword
interface Person {
    readonly name: string;
    age: number;
}

let person: Person = { name: "Carlos", age: 27 };

// This will cause an error because 'name' is readonly
// person.name = "Bob";

// This is allowed since 'age' is not readonly
person.age = 27;

// ----------

// 'keyof' operator
interface Person {
    // name: string;
    age: number;
}

type PersonKeys = keyof Person;

// PersonKeys will be "name" | "age"
let key: PersonKeys = "name";

// This will cause an error since "gender" is not a key of Person
// key = "gender";

// ----------

// 'typeof' operator
let x = 14;
let y: typeof x; // y will have the type number

let obj = { name: "Carlos", age: 27 };
let objType: typeof obj; // objType will have the type { name: string; age: number; }
