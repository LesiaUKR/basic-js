function getEmailDomain(email) {
  const splittedEmailArray = email.split("@");
  console.log(splittedEmailArray);
  let domain = splittedEmailArray[splittedEmailArray.length-1];
return domain;

}

console.log(getEmailDomain("prettyandsimple@example.com"));
