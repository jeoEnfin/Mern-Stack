const express = require('express');

const {
    getEntertainments,
    createEntertainments,
    getEntertainment,
    deleteEntertainment
} = require('../controllers/entertainmentController');

const router = express.Router();

router.route('/').get(getEntertainments).post(createEntertainments);
router.route('/:id').get(getEntertainment).delete(deleteEntertainment);

module.exports = router;