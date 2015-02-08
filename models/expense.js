var mongoose = require('mongoose');

var Expense = new mongoose.Schema({
  name: String,
  amount: Number,
});

module.exports = mongoose.model('Expense', Expense);
