const express = require('express');

const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
 } = require('../controllers/workoutController');


const router = express.Router();

router.route('/').post(createWorkout).get(getWorkouts);
router.route('/:id').get(getWorkout).delete(deleteWorkout).patch(updateWorkout);


module.exports = router;