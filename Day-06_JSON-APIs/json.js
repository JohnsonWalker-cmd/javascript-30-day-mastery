// json is written in name / value pairs 

// eg "firstName" : "John"
// JSON names require double quotes but javaScript names do not.

// JSON Objects 
// eg { "firstName" : "wALKER" , "lastName" : "Doe"}

// JSON arrays
/* "employees" : [
{"firstName" : "Johnson" , "lastName" : "Doe"},
{"firstName" : "Johnson" , "lastName" : "Doe"},
{"firstName" : "Johnson" , "lastName" : "Doe"}
]
*/

// converting a json text to javaScript  object

const jsonStr = '{"name" : "Walker" , "lastName" : "Saka"}' ;

const obj = JSON.parse(jsonStr) // convert to JS object
console.log(obj.name);

const backToJson = JSON.stringify(obj);
console.log(backToJson);



