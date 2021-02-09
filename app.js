const express = require('express')
const app = express()
const port = 3000

const moment = require('moment')

let receiveRequestTime
let sendResponseTime

// Functions
function printTime(req, requestTime, responseTime) {
  const totalTime = responseTime - requestTime
  console.log(
    `${requestTime.format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${
      req.originalUrl
    } | total time: ${totalTime}ms`
  )
}

// Set up middlewares
app.use(function (req, res, next) {
  receiveRequestTime = moment()
  res.on('finish', () => {
    sendResponseTime = moment()
    printTime(req, receiveRequestTime, sendResponseTime)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
