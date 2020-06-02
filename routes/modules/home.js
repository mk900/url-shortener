const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  return res.redirect('/shortener')
})

module.exports = router
