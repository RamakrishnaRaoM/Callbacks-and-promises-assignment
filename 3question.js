const person={
  firstName:"Ram",
  lastName:"K",
  age:20,
}
function ageInDays(personObject,callback){
  const fullName='${personObject.firstName}  ${personObject.lastName}';
  const ageInDays=personObject.age*365;
  callback(fullName,ageInDays);
}
function logResult(fullName,ageInDays){
  console.log(`the person's full name is ${ageInDays}.`);
}

ageInDays(person,logResult);