// Template literal Ex.
const firstName = "Carlos"
const lastName = "Vanzego"
const fullName = `${firstName} ${lastName}`

console.log(fullName)
// Prints: Carlos Vanzego


// More examples
const string = `This is a template literal`

var name = "carlos"
console.log(`Hello ${name}`)
// Prints: Hello Carlos

const a = 2
const b = 3
console.log(`${a} + ${b} = ${a + b}`)
// Prints: 2 + 3 = 5

console.log(`This is
a multiline
string.`)
/* 
This is 
a multiline 
string
*/

// Tagged Template Literals 
console.log(String.raw`This is all\non one line.`)
// This is all\non one line.


// Ex.
function custom() {
  return `Custom String`
}

console.log(custom`Template Literal String`)
// Custom String


// Ex.
function custom(strings) {
  console.log(strings)
  // ["My name is", "and I love", ""]
}

var name = "Carlos"
var hobby = "weight lifting"
custom`My name is ${name} and I love ${hobby}`


function custom(strings, name, hobby) {
  console.log(name)
  // Carlos
  console.log(hobby)
  // weight lifting
}

const name = "Carlos"
const hobby = "weight lifting"
custom`My name is ${name} and I love ${hobby}`


// Info --> Reconstruct the string passed into the tagged template literal
function custom(strings, ...values) {
  console.log(values)
  // ["Carlos", "weight lifting"]
}

const name = "Carlos"
const hobby = "weight lifting"
custom`My name is ${name} and I love ${hobby}`

// --->

function custom(strings, ...values) {
  return values.reduce((finalString, value, index) => {
    return `${finalString}${value}${strings[index + 1]}`
  }, strings[0])
}

const name = "Carlos"
const hobby = "weight lifting"
console.log(custom`My name is ${name} and I love ${hobby}`)
// My name is Carlos and I love weight lifting


// Bolding All Values With Tagged Template Literals
function bold(strings, ...value) {
  return values.reduce((finalString, value, index) => {
    return `${finalString}<b>${value}<b>${strings[index + 1]}`
  }, string[0])
}

var name = "Carlos"
var hobby = "Weight lifting"
console.log(bold`My name is ${name} and I love${hobby}`)
// My name is Carlos and I love Weight lifting 


// Removing Newlines From Multiline Strings
function oneLine(strings, ...values) {
  const string = values.reduce((finalString, value, index) => {
    return `${finalString}<b>${value}</b>${strings[index + 1]}`
  }, strings[0])

  return string.replace(/\s*\n\s*/g, " ")
}

console.log(oneLine`This is a long
string that spans across multiple
lines so it is easier to read.`)
// This is a long string that spans across multiple lines so it is easier to read.



// Querying Elements With Tagged Template Literals
function queryAll(strings, ...values) {
  const string = values.reduce((finalString, value, index) => {
    return `${finalString}${value}${strings[index + 1]}`
  }, strings[0])

  return document.querySelectorAll(string)
}

queryAll`div`
// This will return all divs on the page