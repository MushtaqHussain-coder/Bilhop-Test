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

module.exports = {
  toRovarspraket,
  fromRovarspraket,
};
