import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import http from 'http'

import api from './api'

const limit = 10000000

const app = express()
// CHANGE FFS
app.use(cookieParser('secret'))

app.use(bodyParser.json({
  limit
}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit
}))

app.use(cors())

app.use('/api', api)

const httpHandler = http.Server(app)
httpHandler.listen('3000', () => {
  console.log('Listen on port 3000');
})
