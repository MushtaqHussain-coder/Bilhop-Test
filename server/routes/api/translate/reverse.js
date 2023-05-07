const response = require('../../../lib/response');
const { translateManyFromRovarspraket } = require('../../../lib/translate');

const reverse = async (req, res, next) => {
  const resp = response();
  const { texts } = req.body;

  resp.data = translateManyFromRovarspraket(texts);

  res.status(200).json(resp);
};

module.exports = reverse;
