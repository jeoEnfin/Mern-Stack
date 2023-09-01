const express = require('express');

const {
    createUserImage,
    getUserImage
} = require('../controllers/userImageController');

const router = express.Router();

router.route('/').post(createUserImage).get(getUserImage)

module.exports = router;