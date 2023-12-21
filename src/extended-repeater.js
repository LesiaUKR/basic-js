const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  let newString = "";
  let newAddString = "";

  for (let i = 1; i <= additionRepeatTimes; i++) {
    newAddString += `${addition}${
      i < additionRepeatTimes ? additionSeparator : ""
    }`;
    console.log("newAddString", newAddString);
  }

  for (let j = 1; j <= repeatTimes; j++) {
    newString += `${str}${newAddString}${j < repeatTimes ? separator : ""}`;
  }

  return newString;
}

console.log(
  repeater("REPEATABLE_STRING", {
    repeatTimes: 2,
    addition: "ADDITION",
    additionRepeatTimes: 3,
  })
);
// console.log(repeater("la", { repeatTimes: 3 }));
// console.log(repeater("single", { repeatTimes: 1 }));
// console.log(repeater("12345", { repeatTimes: 5 }));

module.exports = {
  repeater,
};
