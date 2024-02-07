function setTimeoutPromise(delay) {
  return new Promise ((resolve, reject) => {
    if (delay < 0) return rejct("Delay must be greater than 0")

    setTimeout(() => {
      resolve(`You waited ${delay} milliseconds`)
    }, delay)
  })
}

setTimeoutPromise(250)
  .then(msg => {
    console.log(msg)
    console.log("First Timeout")
    return setTimeoutPromise(500)
  })
  .then(msg => {
    console.log(msg)
    console.log("Second Timeout")
  })
  // Output:
  // You waited 250 milliseconds
  // First Timeout
  // You waited 500 milliseconds
  // Second Timeout 


  // Same code as above but formatted differnetly 
  doStuff()
  async function doStuff() {
    const msg1 =  await setTimeoutPromise(250)
    console.log(msg1)
    console.log("First Timeout")

    const msg2 = await setTimeoutPromise(500)
    console.log(msg2)
    console.log("Second TImeout")
  }
  // Output
  // You waited 250 milliseconds
  // First Timeout
  // You waited 500 milliseconds
  // Second Timeout



  // Catching Errors
  setTimeoutPromise(-10)
  .then(msg => {
    console.log(msg)
  })
  .catch(error => {
    console.error(error)
  })
  // Output:
  // Delay must be greater than 0

  
  // Cathcing Errors with aysnc/await
  doStuff()
  async function doStuff() {
    try {
      const msg = await setTimeoutPromise(-10)
      console.log(msg)
    } catch (error) {
      console.error(error)
    }
    console.log("Outside")
  }
  // Outpuut:
  // Delay must bbe greater than 0
  // Outside 

  // Finally portion of promises
  setTimeoutPromise(-10)
  .then(msg => {
    console.log(msg)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log("Runs no matter what")
  })
  // Output:
  // Delay must be greater than 0
  // Runs no matter what 

  doStuff()
  async function doStuff() {
    try {
      const msg = await setTimeoutPromise(-10)
      console.log(msg)
    } catch (error) {
      console.error(error)
     } finally {
      console.log("Runs no matter what")
     } 
    }
// Output:
// Delay must be greater than 0
// Runs no matter what 


// looping through a set of values and want to do something with these values that is asynchronous
for (let i = 0; i < 10; i++) {
  getCustomRepository(i).then(user => console.log())
}

await function doStuff() {
  for (let i = 0; i < 10; i++) {
    const user = await getCustomRepository(i)
    console.log(user)
  }
}
