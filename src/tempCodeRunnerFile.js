function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "",
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

// console.log(
//   repeater("STRING", {
//     repeatTimes: 3,
//     separator: "**",
//     addition: "PLUS",
//     additionRepeatTimes: 3,
//     additionSeparator: "00",
//   })
// );
console.log(
  repeater("REPEATABLE_STRING", {
    repeatTimes: 2,
    addition: "ADDITION",
    additionRepeatTimes: 3,
  })
);