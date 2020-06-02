// ! Include packages
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const routes = require('./routes')
const Shortener = require('./models/shortener')

// ! Setup server
// ! 如果在 Heroku 環境則使用 process.env.PORT 否則為本地環境，使用 3000 
const app = express()
const PORT = process.env.PORT || 3000

// ! Locate static file
app.use(express.static('public'))

// ! Set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// ! Use body parser
app.use(bodyParser.urlencoded({ extended: true }))

// ! Re-write for RESTful
app.use(methodOverride('_method'))

// ! Connect DB
require('./config/mongoose')

// ! Messages 提示框
app.use(flash())
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  res.locals.errors = req.flash('error')
  next()
})

// ! Express router
app.use(routes)

// ! Listen to running app
app.listen(PORT, () => {
  console.log(`App is listening on localhost:${PORT}`)
})