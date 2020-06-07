// ! Include packages
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

// ! Setup app server
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
app.use(express.static('public'))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// ! Connect DB
require('./config/mongoose')

// ! Express router
app.use(routes)

// ! Listen port
app.listen(PORT, () => {
  console.log(`App is listening on localhost:${PORT}`)
})