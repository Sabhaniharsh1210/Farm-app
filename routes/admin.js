var express = require('express');
const { login } = require('../controlar/admincontrolar');
var router = express.Router();


router.post('/',login)

module.exports = router;
