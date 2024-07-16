const router = require('express').Router();

const magicRoutes = require('./magic-routes');

router.use('/magic', magicRoutes);

module.exports = router;