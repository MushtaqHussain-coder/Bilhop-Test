const response = require('../../../lib/response');
const { fromRovarspraket } = require('../../../lib/translate');

const reverse = async (req, res, next) => {
  const resp = response();
  const { text } = req.body;
  if (typeof text !== 'string' || text.length < 1) {
    resp.success = false;
    resp.message = 'Invalid or missing required field(s)';
    return res.status(400).json(resp);
  }

  resp.data = fromRovarspraket(text);

  res.status(200).json(resp);
};

module.exports = reverse;
