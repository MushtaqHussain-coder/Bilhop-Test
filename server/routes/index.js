const router = require('express').Router();
const { defaultHandler, notFound } = require('./errorHandler');
const api = require('./api');

router.use('/api', api);

router.use(notFound);
router.use(defaultHandler);

module.exports = router;
