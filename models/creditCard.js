var mongoose = require('mongoose');

var CreditCard = new mongoose.Schema({
  name: String,
  amount: Number,
  interest: Number,
  annualFee: Number,
  payment: Number,
  minPaymentPercent: Number,
  minPayment: Number,
  dateCreated: {type: Date, default: Date.now},
  dateUpdated: {type: Date, default: Date.now},
});

module.exports = mongoose.model('CreditCard', CreditCard);
