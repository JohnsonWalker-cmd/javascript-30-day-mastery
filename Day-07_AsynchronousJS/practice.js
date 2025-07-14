// Order processing simulator
/*const promise = new Promise((resolve, reject) => {
  // Async logic
  if (everythingWorks) {
    resolve("Success!");
  } else {
    reject("Something went wrong.");
  }
});

setTimeout(() =>{

} , 3000);

promise
  .then()// show order confirmation
  .catch(); // catch any errors */


const pizzaInStock = false;
const order = new Promise((resolve,reject) => {
  setTimeout(() =>{
    if(pizzaInStock){
      resolve("✅ Your pizza has been ordered!");
    }else {
      reject("❌ Sorry, pizza is out of stock.")
    }
  } , 3000)
 
})

order
  .then(msg => console.log(msg))
  .then(() => console.log("📦 Preparing your pizza..."))
  .catch(err => console.log(err));