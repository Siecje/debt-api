var mongoose = require('mongoose');

var Income = new mongoose.Schema({
  name: String,
  amount: Number,
});

module.exports = mongoose.model('Income', Income);
