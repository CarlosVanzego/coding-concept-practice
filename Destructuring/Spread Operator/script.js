// Destructuring An Array

// Normally:
var array = ["A", "B", "C", "D", "E"]
var first = array[0]

console.log(first)
// A

// If you wanted two elements
var array = ["A", "B", "C", "D", "E"]
var first = array[0]
var second = array[1]

console.log(first)
// A
console.log(second)
// B


// Now done wit Destructuring Ex.
var array = ["A", "B", "C", "D", "E"]
var [first, second] = array

console.log(first)
// A
console.log(second)
// B

// To get three elements from the array
var array = ["A", "B", "C", "D", "E"]
var [first, second, third] = array

console.log(first)
// A
console.log(second)
// B
console.log(third)
// C

// If you want to skip an element
var array = ["A", "B", "C", "D", "E"]
var [first, , third] = array

console.log(first)
// A
console.log(third)
// C


// Spread Operator With Arrays - combined with destructuring to get all other elements not specifically destructured already.
var array = ["A", "B", "C", "D", "E"]
var [first, second, ...rest] = array

console.log(first)
// A
console.log(second)
// B
console.log(rest)
// ['C', 'D', 'E']

// Combine multiple arrays together
var array1 = [1, 2, 3]
var array2 = [4, 5, 6]
var newArray = [...array1, ...array2]

console.log(newArray)
// [1, 2, 3, 4, 5, 6]

//  Addinf individual elements in
var array1 = [1, 2, 3]
var array2 = [4, 5, 6]
var newArray = [0, ...array1, 3.5, ...array2, 7]

console.log(newArray)
// [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// Use Cases for When To use Destructuring/Spread Operator With Arrays

// Copying An Array
var array = [1, 2, 3]
var arrayClone = [...array]
arrayClone.push(4)

console.log(array)
// [1, 2, 3]
console.log(arrayClone)
// [1, 2, 3, 4]

// Converting An Array-Like Object To An Array
var elements = document.querySelector('div')
var array = [...elements]

// array.map(a => /* This works */)
// elements.map(e => /* This throws an error */)

// Destructuring Function Returns
function sumAndMultiply(a, b) {
  return [a + b, a * b]
}

const [sum, product] = sumAndMultiply(2, 3)

console.log(sum)
// 5
console.log(product)
// 6

// Destructuring Objects
var person = { name: "Carlos", age: 27 }
var { name, age } = person

console.log(name)
// Carlos
console.log(age)
// 27

// Renaming variables
var person = { name: "Carlos", age: 27 }
var { name: firstName, age } = person

console.log(firstName)
// Carlos
console.log(age)
// 27


// Spread Operator With Objects
var person = { name: "Carlos", age: 27, favoriteFood: "Pizza" }
var { name, ...rest } = person

console.log(name)
// Carlos
console.log(rest)
// { age: 27, favoriteFood: 'Pizza' }

// Combining together two objects with the spread operator to create a new object
var person1 = { name: "Carlos", age: 27 }
var person2 = { age: 32, favoriteFood: "Pizza" }
var newPerson = { ...person1, ...person2 }

console.log(newPerson)
// { name: 'Carlos', age: 32, favoriteFood: 'Pizza' }


// Nested Object Destructuring
var person = {
  name: "Carlos",
  age: 27,
  address: {
    city: "Somewhere",
    state: "One Of Them",
  },
}
var {
  name,
  address: { city },
} = person

console.log(name)
// Carlos
console.log(city)
// Somewhere


// When To Use Destructuring/Spread Operator With Objects

//Copying An Object
var person = { name: "Carlos", age: 27 }
var personClone = { ...person }
personClone.name = "Taylor"

console.log(person)
// { name: 'Carlos', age: 27 }
console.log(personClone)
// { name: 'Taylor', age: 25 }

// Destructuring Function Returns
// function sumAndMultiply(a, b) {
//   return { sum: a + b, product: a * b }
// }

// const { sum, product } = sumAndMultiply(2, 3)

// console.log(sum)
// // 5
// console.log(product)
// // 6

// Destructuring Function Parameters
function printPerson({ name, age, favoriteFood = "None" }) {
  console.log(`Name: ${name}. Age: ${age}. Food: ${favoriteFood}.`)
}

const person = { name: "Carlos", age: 27 }

printPerson(person)
// Name: Carlos. Age: 27. Food: None.