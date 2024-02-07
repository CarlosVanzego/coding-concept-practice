// for loop example
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i)
  }

  console.log("Hooray")
}

// Recursive version
function countDownRecursive(n) {
  if (n <= 0) {
    console.log("Hooray")
    return
  }

  console.log(n)
  countDownRecursive(n - 1)
}



// foor loop example 2
function sumRange(n) {
  let total = 0
  for (let i = n; i > 0; i--) {
    total += i
  }
  return total
}

// Recursive version
function sumRangeRecursive(n) {
  if (n <= 0) return 0
  return sumRangeRecursive(n - 1) + n
}



// ideal Recursion Use Case
{

  name: 'John';
  children: [
    {
      name: 'Carlos',
      children: []
    },
    {
      name: 'Taylor',
      children: [
        { name: 'Abel', children: [] },
        { name: 'River', children: [] },
      ]
    }
  ]
}

// Recursion version
function getAllChildrenNames(person) {
  const nestedChildNames = person.children.flatMap(child => {
    return getAllChildrenNames(child)
  })
  const childNames = person.children.map(p => p.name)

  return childNames.concat(nestedChildNames)
}