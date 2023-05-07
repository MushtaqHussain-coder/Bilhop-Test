const response = require('../../../lib/response');
const { translateManyToRovarspraket } = require('../../../lib/translate');

const normal = async (req, res, next) => {
  const resp = response();
  const { texts } = req.body;

  resp.data = translateManyToRovarspraket(texts);

  res.status(200).json(resp);
};

module.exports = normal;
