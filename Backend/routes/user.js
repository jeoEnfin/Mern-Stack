const express = require('express');

const { 
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')


const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);


module.exports = router;