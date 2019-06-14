var express = require('express');
var router = express.Router();

var dataBike = [
  {name: 'Model BIKO45', price: 679, url: '/images/bike-1.jpg'},
  {name: 'Model ZOOK7', price: 799, url: '/images/bike-2.jpg'},
  {name: 'Model LIKO89', price: 839, url: '/images/bike-3.jpg'},
  {name: 'Model GEWO', price: 1206, url: '/images/bike-4.jpg'},
  {name: 'Model TITAN5', price: 989, url: '/images/bike-5.jpg'},
  {name: 'Model AMIG39', price: 599, url: '/images/bike-6.jpg'}
];

var dataCardBike = [
  {name: 'Model BIKO45', price: 679, url: '/images/bike-1.jpg', quantity: 1},
  {name: 'Model ZOOK7', price: 799, url: '/images/bike-2.jpg', quantity: 1}
]





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { dataBike });
});



router.get('/shop', function(req, res, next) {
  res.render('shop', { dataCardBike });
});

router.get('/product1', function(req, res, next) {

  // mettre une boucle ici qui permet de choisir lelement que l'on souhaite 
  res.render('product1', { dataBike});
});



module.exports = router;

