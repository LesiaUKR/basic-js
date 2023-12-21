const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const numberStr = number.toString();
  const newDigitsArray = [];

  for (let i = 0; i < numberStr.length; i++) {
    const start = numberStr.slice(0, i);
    const end = numberStr.slice(i + 1, numberStr.length);
    let newNumber = start.concat(end);
    newDigitsArray.push(newNumber);
  }
  let maxNumber = Math.max(...newDigitsArray);
  return maxNumber;
}

module.exports = {
  deleteDigit,
};
