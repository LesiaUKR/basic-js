const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount(s1, s2) {
//   let splittedS1 = s1.split("");
//   console.log(splittedS1);
//   let splittedS2 = s2.split("");
//   console.log(splittedS2);

//   const commonCharacters = [...set1].filter((char) => set2.has(char)).length;

//   return commonCharacters;
// }

// console.log(getCommonCharacterCount("aabcc", "adcaa"));

// function countCharacters(s) {
//   const charCount = {};
//   for (const char of s) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   return charCount;
// }

// console.log(countCharacters("aabcc"));

function getCommonCharacterCount(s1, s2) {
  let commonCharacters = 0;
  let newSetS1 = [...new Set(s1)];

  for (const char of newSetS1) {
    commonCharacters += Math.min(
      s1.split(char).length - 1,
      s2.split(char).length - 1
    );
  }
  return commonCharacters;
}

module.exports = {
  getCommonCharacterCount,
};
