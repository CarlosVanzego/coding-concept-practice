let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('Success')
  } else {
    reject('Failed')
  }
})

p.then((message) => {
  console.log('This is in the then ' + message)
}).catch((message) => {
  console.log('This is in the catch' + message)
})

// More examples

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 recorded')
})

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
})



