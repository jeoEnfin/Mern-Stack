const express = require('express');

const {createUser,loginUser} = require('../controllers/loginController')

const router = express.Router();

router.route('/signup').post(createUser);
router.route('/login').post(loginUser);

module.exports = router;