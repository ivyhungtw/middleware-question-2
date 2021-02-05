const express = require('express')
const app = express()
const port = 3000

const moment = require('moment')

let receiveRequestTime
let sendResponseTime

// Set up middlewares
app.use(function (req, res, next) {
  receiveRequestTime = moment()
  // receiveRequestTime = moment().format('YYYY-MM-DD HH:mm:ss')
  // console.log(`${date} | ${req.method} from ${req.originalUrl}`)
  next()
})

function printTime(req, requestTime, responseTime) {
  const totalTime = responseTime - requestTime
  console.log(
    `${requestTime.format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${
      req.originalUrl
    } | total time: ${totalTime}ms`
  )
}

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
  sendResponseTime = moment()
  printTime(req, receiveRequestTime, sendResponseTime)
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
  sendResponseTime = moment()
  printTime(req, receiveRequestTime, sendResponseTime)
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
  sendResponseTime = moment()
  printTime(req, receiveRequestTime, sendResponseTime)
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
  sendResponseTime = moment()
  printTime(req, receiveRequestTime, sendResponseTime)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
