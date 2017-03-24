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
