function manipulatedString(inputstring,callback){
  const manipulatedString=inputstring.toUpperCase();
  callback(manipulatedString);
}
function logString(manipulatedString){
  console.log(`the manupulated string is ${manipulatedString}`);
}
manipulatedString("Hello world",logString);