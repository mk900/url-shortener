const express = require('express')
const router = express.Router()
const Shortener = require('../../models/shortener')

router.get('/', (req, res) => {
  const url = ''
  res.render('index')
})

router.post('/shortener', (req, res) => {
  const url = req.body.url
  const createRandomShortener = function () {
    const shortenerCode = Math.random().toString(36).slice(-5)
    Shortener.findOne({ shortenURL: shortenerCode }, (err, shortener) => {
      if (err) console.log(err)
      else if (shortener) {
        return createRandomShortener()
      } else {
        const shortener = new Shortener({
          shortenURL: shortenerCode,
          originalUrl: url
        })
        shortener.save(err => {
          let link = ''
          link += req.headers.origin + '/' + shortenerCode
          if (err) console.log(err)
          return res.render('shortener', { link })
        })
      }
    })
  }
  // 防止表單是空的
  if (url === '') {
    res.render('index', { messages: 'URL欄位未填' })
  } else if (url.includes("https://") || url.includes("http://")) {
    Shortener.findOne({ originalUrl: url })
      .lean()
      .exec((err, shortener) => {
        if (err) console.log(err)
        // 資料庫有該網址
        if (shortener) {
          let link = ''
          link += req.headers.origin + '/' + shortener.shortenURL
          res.render('shortener', { link })
          // 資料庫沒有該網址
        } else {
          // 防止重複短網址
          createRandomShortener()
        }
      })
  } else {
    res.render('index', { messages: 'URL欄位未完整需含https://' })
  }
})

router.get('/:id', (req, res) => {
  Shortener.findOne({ shortenURL: req.params.id })
    .exec((err, shortener) => {
      if (err) console.log(err)
      if (shortener) {
        res.redirect(shortener.originalUrl)
      } else {
        res.render('index')
      }
    })
})

module.exports = router