const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const splittedAddress = n.split("-");
  console.log(splittedAddress);
  if (splittedAddress.length !== 6) {
    return false;
  }
  for (let part of splittedAddress) {
    if (part.length !== 2) {
      return false;
    }

    for (let char of part) {
      if (!/[0-9A-Fa-f]/.test(char)) {
        return false;
      }
    }
  }
  return true;
}

console.log(isMAC48Address("00-1B-63-84-45-E6"));

module.exports = {
  isMAC48Address,
};
