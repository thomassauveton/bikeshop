var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'page panier!' });
});

router.get('/product1', function(req, res, next) {
  res.render('product1', { title: 'page produit !' });
});



module.exports = router;
