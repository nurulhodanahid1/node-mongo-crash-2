var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world22344')
})

app.listen(3000)