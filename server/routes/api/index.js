const router = require('express').Router();
const normal = require('./translate/normal');
const reverse = require('./translate/reverse');

router.get('/greet', (req, res, next) => {
  res.status(200).json({ success: true, message: 'hi' });
});

router.post('/translate/normal', normal);
router.post('/translate/rovarsprak', reverse);

module.exports = router;
