const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const records = require('./modules/shorten')

router.use('/', home)
router.use('/shortener', shorten)

module.exports = router
