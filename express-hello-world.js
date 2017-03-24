const express = require('express')
const app = express()

let args = process.argv

console.log(args)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/time', (req, res) => {
  res.send(new Date().toString())
})


app.listen(8080)
