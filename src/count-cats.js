const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const flattenedMatrix = matrix.flat();
  let countCats = 0;

  for (let i = 0; i <= flattenedMatrix.length - 1; i += 1) {
    if (flattenedMatrix[i] === "^^") {
      countCats += 1;
    }
  }

  return countCats;
}

console.log(
  countCats([
    [0, 1, "^^"],
    [0, "^^", 2],
    ["^^", 1, 2],
  ])
);

module.exports = {
  countCats,
};
