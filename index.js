var express = require('express')
var bodyParser = require('body-parser')
const { query } = require('./async-db')

getData = async () => {
  let sql = 'SELECT * FROM blog.b05901061'
  let dataList = await query(sql)
  return dataList
}

postData = async values => {
  let sql = 'INSERT INTO blog.b05901061 SET ?'
  let dataList = await query(sql, values)
  return dataList
}

delData = async title => {
  let sql = 'DELETE FROM blog.b05901061 WHERE titles = \''+ title +'\''
  let dataList = await query(sql)
  return dataList
}

init = async () => {
  let sql = 'USE blog'
  await query(sql)
  sql = 'CREATE TABLE b05901061(titles VARCHAR(255), bodies VARCHAR(255))'
  await query(sql)
}

init()

// server
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next()
})

app.get('/', async (req, res, next) => {
  var data = await getData()
  res.json(data)
  next()
})

app.post('/', async (req, res, next) => {
  var sql = {
    titles: req.body.title,
    bodies: req.body.body
  }
  await postData(sql)
  res.json({ "success": "true" })
  next()
})

app.delete('/', async (req, res, next) => {
  var title = req.body.title
  console.log(title)
  await delData(title)
  res.json({ "success": "true" })
  next()
})

server = app.listen(8080, () => {
  console.log('Server is running on port 8080');
})