var express = require('express');
const { register, login, logout, forgate, check_otp, update_password, update_profile } = require('../controlar/buyercontrolar');
const {buyerchecktoken} = require('../midalware/auth')
var router = express.Router();

// buyer register
router.post('/register',register)

// buyer login

router.get('/login', login)

// buyer logout

router.get('/logout',buyerchecktoken, logout)

// buyer forgate password

router.post('/forgate', forgate)
router.post('/check_otp', check_otp)
router.post('/update_password', update_password)

// buyer update user profile

router.post('/update_profile/:id', update_profile)

module.exports = router;
