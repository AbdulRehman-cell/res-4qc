const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  status: { type: String, trim: true }
}, { timestamps: true })
module.exports = mongoose.model('Create', schema)
