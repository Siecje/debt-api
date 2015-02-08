var mongoose = require('mongoose');

var Bill = new mongoose.Schema({
  name: String,
  amount: Number,
});

module.exports = mongoose.model('Bill', Bill);
