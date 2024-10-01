// controllers/index.js

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Fallback route for 404
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;