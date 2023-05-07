const router = require('express').Router();

router.get('/greet', (req, res, next) => {
  res.status(200).json({ success: true, message: 'hi' });
});

module.exports = router;
