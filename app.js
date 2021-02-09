const express = require('express')
const moment = require('moment')
const responseTime = require('response-time')

const app = express()
const port = 3000

// Functions
function printTime(req, requestTime, totalTime) {
  console.log(
    `${requestTime.format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${
      req.originalUrl
    } | total time: ${totalTime}ms`
  )
}

// Set up middleware
app.use(
  responseTime((req, res, time) => {
    const receiveRequestTime = moment()
    printTime(req, receiveRequestTime, time)
  })
)

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
