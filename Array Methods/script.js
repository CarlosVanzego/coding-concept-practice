// Sample Array
const items = [
  { name: 'Bike',   price: 100 },
  { name: 'TV',   price: 200 },
  { name: 'Album',   price: 10 },
  { name: 'Book',   price: 5 },
  { name: 'Phone',   price: 500 },
  { name: 'Computer',   price: 1000 },
  { name: 'Keyboard',   price: 25 },
]

// Filter Method
const filteredItems = items.filter((item) => {
  // all items less than 100 will be in new filtered array
  return item.price <= 100
})

console.log(filteredItems)
// Prints: 
// 0: { name: 'Bike',   price: 100 }
// 1: { name: 'Album',   price: 10 }
// 2: { name: 'Book',   price: 5 }
// 3: { name: 'Keyboard',   price: 25 }
// length: 4

console.log(items)
// Prints:
// 0: { name: 'Bike',   price: 100 }
// 1: { name: 'TV',   price: 200 }
// 2: { name: 'Album',   price: 10 }
// 3: { name: 'Book',   price: 5 }
// 4: { name: 'Phone',   price: 500 }
// 5: { name: 'Computer',   price: 1000 }
// 6: { name: 'Keyboard',   price: 25 }


// Map Method
const itemNames = items.map((item) => {
  // all item names will be in new array
  return item.name <= 100
})

console.log(itemNames)
// Prints:
// 0: 'Bike'
// 1: 'TV'
// 2: 'Album'
// 3: 'Book'
// 4: 'Phone'
// 5: 'Computer'
// 6: 'Keyboard'


// Find Method
const foundItem = items.find((item) => {
  // first item with that name will be returned
  return item.name === 'Book'
})

console.log(foundItem)
// Prints:
// {name: "Book", price: 5}

// For Each Method
items.forEach((item) => {
  // each element of that name will be returned
  console.log(item.name)
// Prints:
// 'Bike'
// 'TV'
// 'Album'
// 'Book'
// 'Phone'
// 'Computer'
// 'Keyboard'
})

// Some Function
var hasInexpensiveItems = items.some((item) => {
  return item.price <= 100
})

console.log(hasInexpensiveItems)
// Prints:
// true

// Every Function
var hasInexpensiveItems = items.every((item) => {
  return item.price <= 100
})

console.log(hasInexpensiveItems)
// Prints:
// false

// Reduce Method
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)

console.log(total)
// Prints:
// 1840


// Includes Method
// const items = [1, 2, 3, 4, 5]

const includesTwo = items.includes(7) 

console.log(includesTwo)
// Prints:
// false




// More Array Methods

// Sample Array
const people = [
  { name: "Carlos",   age: 27 },
  { name: "Taylor",   age: 25 },
  { name: "Robert",   age: 21 },
  { name: "Nia",   age: 18 },
]

// groupBy Method - Groups by certain parameter
var a = Object.groupBy(people)

// push Method - Adds things to the end of an array
var a = people.push(1)

// pop Method - Removes last elememnt from the array
var a = poeple.pop()

// shift/unshift Method - Removes first element from the array/Adds element to the front of the array 
var a = people.shift()
var a = people.unshift(1)

// with Method - Change the value of a specific index
var a = people.with(1, 7)

// at Method - Similar to bracket notation but lets you use negative numbers
var a =people.at()

// fill Method - Replace elements in the array with a specific value
var a = people.fill(1)

// reverse/splice/sort Method - reverses an array/splices an array/sorts an array (all mutate the array); "to" version of each does not mutate the array but returns a whole new array
var a = people.reverse()
var a = people.splice()
var a = people.sort()

// flat/flatmap Method - removes nested arrays (by one level unless specified deeper)/flattens array and then lets you map over
var a = people.flat()
var a = people.flat().map

// findLast Method - finds last instnace of a specific value
var a = people.findLast()

// reduceRigth Method - same as reduce method but starts at the end 
var a = people.reduceRight()

// Array.isArray Method - will return 'true' if it is an array, otherwise returns 'false' if not
console.log(Array.isArray(1))