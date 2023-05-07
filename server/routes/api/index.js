const router = require('express').Router();
const normal = require('./translate/normal');
const reverse = require('./translate/reverse');
const { validateTranslateNormal, validateTranslateReverse } = require('../../lib/validator');

router.post('/translate/normal', validateTranslateNormal, normal);
router.post('/translate/rovarsprak', validateTranslateReverse, reverse);

module.exports = router;
