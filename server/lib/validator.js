const response = require("./response");

const validateTranslateNormal = (req, res, next) => {
  const resp = response();
console.log('->', req.body);
  const { texts } = req.body;

  if (!Array.isArray(texts) || !texts?.length) {
    resp.success = false;
    resp.message = 'Malformed data received!';
    return res.status(400).json(resp);
  }

  for (const text of texts) {
    if (typeof text != 'string' || text.length < 1) {
      resp.success = false;
      resp.message = 'One or more texts item is invalid!';
      return res.status(400).json(resp);
    }
  }
  next();
};

const validateTranslateReverse = (req, res, next) => {
  validateTranslateNormal(req, res, next);
  // next();
};

module.exports = {
  validateTranslateNormal,
  validateTranslateReverse,
};
