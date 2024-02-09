// Express Server
const express = require("express")
const app = express()
// get route that sends "Home Page"
app.get("/", (req, res) => {
  res.send("Home Page")
})
// get route that sends "Users Page"
app.get("/users", (req, res) => {
  res.send("Users Page")
})

app.listen(3000, () => console.log("Server Started"))


// To get started working with a Node.js project you will need to run npm init -y. This will create a basic package.json file with all of the default values filled in already. From there the next thing to do is install Express by running npm i express. Lastly, you need to create a server.js file (Above^)



// Logging Middleware
const express = require("express")
// const app = express()

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/", (req, res) => {
  res.send("Users Page")
})

function loggingMiddleware(req, res, next) {
  console.log("Inside Middleware")
}

app.listen(3000, () =>  console.log("Server Started"))



// How to make middleware execute before every single controller action by adding it to the application level:
const express = require("express")
// const app = express()

app.use(loggingMiddleware)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/users", (req, res) => {
  res.send("Users Page")
})

function loggingMiddleware(req, res, next) {
  console.log("Inside Middleware")
}

app.listen(3000, () => console.log("Server Started"))


// Calling  next after our logging to allow the application to finish the request:
const express = require("express")
// const app = express()

app.use(loggingMiddleware)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/users", (req, res) => {
  res.send("Users Page")
})

function loggingMiddleware(req, res, next) {
  console.log("Inside Middleware")
  next()
}

app.listen(3000, () => console.log("Server Started")) 


// logging out the URL that the user is accessing inside the middleware:
const express = require("express")
// const app = express()

app.use(loggingMiddleware)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/users", (req, res) => {
  res.send("Users Page")
})

function loggingMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
  next()
}

app.listen(3000, () => console.log("Server Started"))


// Advanced Middleware Example
const express = require("express")
// const app = express()

app.use(loggingMiddleware)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/users", (req, res) => {
  res.send("Users Page")
})

function loggingMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
  next()
}
// Another function to use as middleware
function authorizeUsersAccess(req, res, next) {
  console.log("authorizeUsersAccess Middleware")
  next()
}

app.listen(3000, () => console.log("Server Started"))


// Adding app.get to the middleware to ensure that our middleware is only being executed on the users page route
const express = require("express")
// const app = express()

app.use(loggingMiddleware)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/users", authorizeUsersAccess,(req, res) => {
  res.send("Users Page")
})

function loggingMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
  next()
}

function authorizeUsersAccess(req, res, next) {
  console.log("authorizeUsersAccess Middleware")
  next()
}

app.listen(3000, () => console.log("Server Started"))


// Fill in the logic of this^ function so that if the user does not have access to the page they will get an error message instead:
const express = require("express")
// const app = express()

app.use(loggingMiddleware)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/users", authorizeUsersAccess, (req, res) => {
  res.send("Users Page")
})

function loggingMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
  next()
}

function authorizeUsersAccess(req, res, next) {
  if (req.query.admin === "true") {
    next()
  } else {
    res.send("ERROR: You must be an admin")
  }
}

app.listen(3000, () => console.log("Server Started"))