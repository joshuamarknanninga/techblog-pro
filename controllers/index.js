// controllers/index.js

const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes'); // Ensure this line exists

router.use('/', homeRoutes); // Use homeRoutes for the root path
router.use('/api', apiRoutes); // Use apiRoutes for /api paths

// Fallback route for 404 - Not Found
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
