const router = require('express').Router();

const workoutRoutes = require('./workoutroute')

router.use(workoutRoutes);

module.exports = router;