const router = require('express').Router();
const apiRoutes = require('./api');

// Use API routes
router.use('/api', apiRoutes);

// Default route for handling undefined routes
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
