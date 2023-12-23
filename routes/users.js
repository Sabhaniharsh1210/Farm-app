var express = require('express');
const { register, login, logout, forgate, check_otp, update_password, update_profile } = require('../controlar/usercontrolar');
const {userchecktoken} = require('../midalware/auth')
var router = express.Router();

// user register
router.post('/register',register)

// user login

router.get('/login', login)

// user logout

router.get('/logout',userchecktoken, logout)

// user forgate password

router.post('/forgate', forgate)
router.post('/check_otp', check_otp)
router.post('/update_password', update_password)

// user update user profile

router.post('/update_profile/:id', update_profile)

module.exports = router;
