var mongoose = require('mongoose');

var Overdraft = new mongoose.Schema({
  name: String,
  amount: Number,
  interest: Number,
  monthlyFee: Number,
});

module.exports = mongoose.model('Overdraft', Overdraft);
