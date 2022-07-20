require('dotenv').config()

const express = require('express')
const logger = require('morgan')

const routes = require('./config/routes.config')

require('./config/db.config')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.use(routes)

app.use((err, req, res, next) => {
  res.render('error', { err })
})

app.listen(3000, () => console.log('Listening on port 3000'))