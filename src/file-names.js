const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCount = {};
  const newNamesArray = [];

  for (let originalName of names) {
    let name = originalName;
    if (nameCount[name] === undefined) {
      nameCount[name] = 0;
    } else {
      nameCount[name]++;
      name = `${name}(${nameCount[name]})`;
    }
    while (newNamesArray.includes(name)) {
      name = `${name}(1)`;
    }
    newNamesArray.push(name);
  }
  return newNamesArray;
}

module.exports = {
  renameFiles,
};
