const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Convert sampleActivity to a number
  const activity = parseFloat(sampleActivity);

  // Check if the input is a valid number and within the appropriate range
  if (
    isNaN(activity) ||
    typeof sampleActivity !== "string" ||
    activity <= 0 ||
    activity > MODERN_ACTIVITY
  ) {
    return false;
  }

  // Calculate the age using the radioactive decay formula
  const age = Math.ceil(
    Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD)
  );

  // Check if the calculated age is a valid positive number
  if (isNaN(age) || age <= 0) {
    return false;
  }

  return age;
}

module.exports = {
  dateSample,
};
