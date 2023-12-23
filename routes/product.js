var express = require('express');
const { add_product, buy_product } = require('../controlar/productcontrolar');

var router = express.Router();

// add product
router.post('/add_product' , add_product);

// buy product
router.post('/purchase/:product_id', buy_product)


module.exports = router