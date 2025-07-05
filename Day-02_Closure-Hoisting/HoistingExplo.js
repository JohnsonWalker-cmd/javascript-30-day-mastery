
/*function sayHi(){
  return "Hello, Walker!";
}

const sayHi = () => {
  return "Hello, Walker!";
}
console.log(sayHi()); */


// variable hoisting

/*console.log(x);
let x = 5;


console.log(y);
var y = 5; 

console.log(z);
const z = 10; */



sayHello(); // ?

function sayHello() {
  console.log("Hello, Saka!");
}

sayBye(); // ?

const sayBye = function() {
  console.log("Bye, Saka!");
}
// sayBye(); // This will throw an error because sayBye is not hoisted

