var express = require('express')
var mysql = require("mysql")

// dataBase
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "00000000"
})

con.connect(function(err) {
  if (err) {
      console.log('connecting error');
      return;
  }
  console.log('connecting success');
})

var data = {
  titles: [],
  bodies: []
}

con.query('SELECT * FROM blog.admin', (err, rows)=> {
  if (err) console.log(err)
  for (let i = 0; i < rows.length; ++i) {
    data.titles.push(rows[i].titles)
    data.bodies.push(rows[i].bodies)
  }
})

// server
var app = express()

app.use('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get('/', async (req, res,next) => {
  console.log(data)
  res.json(data)
  next()
})

server = app.listen(8080, () => {
  console.log('Server is running on port 8080');
})