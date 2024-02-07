// Closures example:

const myName = 'carlos'

function printName() {
  console.log(myName)
}

printName

// More common Closures example:

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable: ' + outerVariable)
    console.log('Inner Variable: ' + innerVariable)
  }
}

const newFunction = outerFunction('outside')
newFunction('inside')

