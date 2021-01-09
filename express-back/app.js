const express = require('express')
const app = express()
const nameRouter = require('./controllers/names')

// reduce information about used technology
app.disable('x-powered-by')

// use frontend build from cra-front
app.use(express.static('build'))
// parse request.body to json format
app.use(express.json())
// backend routes
app.use('/api/names', nameRouter)

module.exports = app