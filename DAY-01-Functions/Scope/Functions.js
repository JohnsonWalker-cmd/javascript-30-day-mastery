/*function square(number){
  return number * number;
}*/

function myFunc(theObject){
  theObject.make = "Toyota";
  theObject.model = "Camry";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);
console.log(myCar.model);

// so passing an object to a function does not create a copy of the object, it passes a reference to the original object
// so the function can modify the original object

// functions declarations can be nested


// nested functions can access variables from their parent function's scope
function multiply(){
  const num1 = 2;
  const num2 = 3;

  function whoscored(){
    return num1 * num2;
  }

  return whoscored();
}


// ingredients for a useful closure:
//1. the parent scope
//2. an inner scope defined within the parent scope
//3. the inner scope must be returned from the parent scope


/*function outer(){
  let name = "Saka";

  function inner(){
    console.log("Hello " + name);
  }

  return inner;
}

const greet = outer();
console.log(greet);
greet(); */


// Aclosure is not where it's written , but what it remembers.


// Multiply-nested functions


// fucntion expression

const square = function(number){
  return number * number;
}

console.log(square(5));

// you can still have the name in a function expression


// a method is a function that is a property of an object

// a function can call itself

// function hositing
// only function declarations are hoisted, not function expressions
console.log(cube(5));

function cube(number){
  return number * number * number;
}

// function expressions are not hoisted
// so this will throw an error
/*console.log(times(2,3,4));
const times = function(a,b,c){
  return a*b*c;
}*/


// a function that calls itself is a recursive function

function factor(number, ...args){
  if (number <= 1) {
    return 1;
  } else {
    return number * factor(number - 1, ...args);
  }
}

console.log(factor(5)); // 120

// arrow functions

// () => {}

// writing a funtion in 3 different ways
// declaration , expression and arrow
function square1(n){
  return n * n;
}

const square2= function(n){
  return n * n;
}

const square3 = (n) => n * n;


function outer(){
  let surname = "Saka";

  function inner(){
    console.log("Hello " + surname);
  }

  return inner;
}

const greet = outer();
greet();