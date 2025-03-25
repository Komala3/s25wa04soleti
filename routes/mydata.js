var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Komala Soleti' });
});

module.exports = router;

router.get('/', (req, res) => {
  res.render('mydata', { title: 'Komala Soleti' });
});