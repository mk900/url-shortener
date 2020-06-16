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
    // console.log(shortenerCode)     
    let link = ''
    link += req.headers.origin + '/' + shortenerCode
    Shortener.create({ originalUrl:url, shortenURL:shortenerCode })
    res.render('shortener', { link })
  }  

  // 防止表單是空值或輸入不全
  if (url === '') {
    res.render('index', { messages: 'URL欄位未填' })
  } else if (url.includes("https://") || url.includes("http://")) {
    Shortener.findOne({ originalUrl: url })
      .lean()
        // 資料庫有該網址就回傳短址
        // Callback改Promise風格
      .then((shortener) => {
        if (shortener) {
          let link = ''
          link += req.headers.origin + '/' + shortener.shortenURL
          res.render('shortener', { link })
          // 資料庫沒有該網址就建立短址
        } else {
          createRandomShortener()
        }
      })
      .catch((err) => console.log(err))

  } else {
    res.render('index', { messages: 'URL欄位未完整需含https://' })
  }
})  

router.get('/:id', (req, res) => {
  Shortener.findOne({ shortenURL: req.params.id })
    .lean()
    .then((shortener) => {
      if (shortener) {
      return res.redirect(shortener.originalUrl)
    } else {
      return res.render('index')}
    })
    .catch((err) => console.log(err))
})  


module.exports = router