/**
 * Translate a normal string to Rövarspråket
 *
 * @param {*} str
 * @returns
 */
const toRovarspraket = (str) => {
  const substitute = (char) => `${char}o${char}`;
  return str.replaceAll(/[bcdfghjklmnpqrstvwxys]/gi, substitute);
};

/**
 * Translate a Rövarspråket string to normal
 *
 * @param {*} str
 * @returns
 */
const fromRovarspraket = (str) => {
  const substitute = (_, index) => index;
  return str.replaceAll(/([bcdfghjklmnpqrstvwxyz])o\1/gi, substitute);
};

/**
 *  Translate an array of texts
 *
 * @param {*} texts array
 * @returns
 */
const translateManyToRovarspraket = (texts) => {
  const transalations = [];
  for (const text of texts) {
    transalations.push(toRovarspraket(text));
  }

  return transalations;
};

/**
 *  Translate an array of texts
 *
 * @param {*} texts array
 * @returns
 */
const translateManyFromRovarspraket = (texts) => {
  const transalations = [];
  for (const text of texts) {
    transalations.push(fromRovarspraket(text));
  }

  return transalations;
};

module.exports = {
  toRovarspraket,
  fromRovarspraket,
  translateManyToRovarspraket,
  translateManyFromRovarspraket,
};
