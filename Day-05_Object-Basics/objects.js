const user = {
  name: "Saka",
  age: 22,
  isLoggedIn: true,
  address: {
    city: "Accra",
    country: "Ghana"
  }
};

console.log(user.name); // this or 
console.log(user["name"]);// that
console.log(user.isLoggedIn);

user.age = 22;
console.log(user.age);

user.email = "sakajohnson1@gmail.com";
console.log(user)
console.log(user.address.country);


// object destructuring
const {name , age} = user;
console.log(name,age);


const { city } = user.address;
console.log(city);

function greet({name , age}){
  console.log(`Hello ${name}, you are ${age} years old`);
}
greet(user);


// Destructuring in Arrays 
const scores = [20,45,100];
const [Math,Science,English] = scores ;
console.log(Math);