function createDreamTeam(members) {
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

console.log(createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]));
