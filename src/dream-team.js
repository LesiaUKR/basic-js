const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let firstLettersArray = [];

  for (name of members) {
    if (typeof name === "string" && name.trim() !== "") {
      firstLettersArray.push(name.trim().charAt(0).toLowerCase());
    }
  }
  const sortedArray = firstLettersArray.sort();
  const dreamTeamName = sortedArray.join("").toUpperCase();
  console.log("sortedArray", sortedArray);
  return dreamTeamName;
}

module.exports = {
  createDreamTeam,
};
