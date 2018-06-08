var express = require('express')
var app = express()

var
data = {
  titles: [
    '人生怎麼這麼難',
    '現在放棄暑假就開始了',
    '為什麼WEB作業這麼多',
    '自SA貓貓',
  ],
  bodies: [
    '人生就4這麼難',
    '暑假開始然後就結束了',
    '而且跟人生一樣難',
    '自SA貓貓'
  ]
}

app.use('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin")
  next()
})

app.get('/', (req, res) => {
  res.json(data)
})

server = app.listen(8080, () => {
  console.log('Server is running on port 8080');
})