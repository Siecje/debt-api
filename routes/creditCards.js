var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var CreditCard = require('../models/creditCard.js');

/* GET /credit-cards listing */
router.get('/', function(req, res, next){
  CreditCard.find(function(err, creditCards){
    if (err){
      return next(err);
    }
    res.json(creditCards);
  });
});

/* POST /credit-cards */
router.post('/', function(req, res, next){
  CreditCard.create(req.body, function(err, post){
    if(err){
      return next(err);
    }
    res.json(post);
  });
});

/* GET /credit-cards/:id */
router.get('/:id', function(req, res, next){
  CreditCard.findById(req.params.id, function(err, post){
    if(err){
      return next(err);
    }
    res.json(post);
  });
});

/* PUT /credit-cards/:id */
router.put('/:id', function(req, res, next){
  CreditCard.findByIdAndUpdate(req.params.id, req.body, function(err, post){
    if(err){
      return next(err);
    }
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next){
  CreditCard.findByIdAndRemove(req.params.id, req.body, function(err, post){
    if(err){
      return next(err);
    }
    res.json(post);
  });
});

module.exports = router;
