const array1 = ["Walker" , "Gloria" , "Lucy" , "Mike" , "Lucky"];

// finding the length of an array
console.log(array1.length);

// accessing elements in the array
console.log(array1[0]);

// modify an item in an array
array1[1] = "AJ";
console.log(array1);

// a mutidimensional array

const random = ["tree" , 795, [0,1,2]];
console.log(random[2][2]);


// finding the index of items in an array
console.log(array1.indexOf("AJ"));

// adding items to an array

// using the push() to add items at the end of an array
const newlength = array1.push("Saka");
console.log(array1);

console.log(newlength);

// to add an item at the start of the array, use unshift()

console.log(array1.unshift("Dad"));
console.log(array1);


// Removing items , use the pop()
// removes the last item from an array
const removedElement = array1.pop();
console.log(removedElement);


// to remove the first item of an array, use shift() 
console.log(array1.shift());
console.log(array1);


// using the splice method to remove items from an array

const index = array1.indexOf("Walker");
if(index !== -1){
  array1.splice(index,1);
}

console.log(array1)


// accessing every item in an array
const names = ["Walker" , "Julie" , "Michael"];

for ( let name of names){
  console.log(name);
}


// Transforming an array
 const numbers = [1,2,3,4,5]

 function double(number){
  return number * number ;
 }

 const doubled = numbers.map(double);
 console.log(doubled);


 //Learn how to extract only the elements that match a condition

 function greaterThan(number){
  return number > 1;
 }

 const numberGreat = numbers.filter(greaterThan);
 console.log(numberGreat);

 const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue ;
 } , 0);

 console.log(sum);


 // let's play with some cool things

 const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

 const cities = data.split(",");
 console.log(cities.length);
 console.log(cities[0]);
 console.log(cities[1]);
 console.log(cities[2]);

