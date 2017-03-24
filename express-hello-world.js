const express = require('express')
const app = express()

let port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/time', (req, res) => {
  res.send(new Date().toString())
})

if(port){
  app.listen(port)
} else {
  app.listen(8080)
}

// Example of setting port in cli

// PORT=1337 node express-hello-world.js

// uses port 8080

// node express-hello-world.js
