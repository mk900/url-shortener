// ! Define data model schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  shortenURL: {
    type: String,
    require: true
  },
  originalUrl: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Shortener', urlSchema)