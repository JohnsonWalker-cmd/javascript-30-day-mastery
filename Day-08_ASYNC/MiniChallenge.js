function placeOrder(){
  return new Promise((resolve,reject) => {
      setTimeout(()=>{
        const success = true;
        if(success){
          resolve("Order placed");
        }else{
          reject("Cannot place order");
        }
        
      }, 1000)
  });
}
function cookBurger(orderMsg){
  return new Promise((resolve) => {
      setTimeout(()=>{
        resolve(`Burger underway based on ${orderMsg}:`);
      }, 2000)
  });
}
function serveBurger(cookMsg){
  return new Promise((resolve) => {
      setTimeout(()=>{
        resolve(`Burger served based on ${cookMsg}`);
      }, 1500)
  });
}

async function startBurgerOrder(){
  try{
    const order = await placeOrder();
    const cookBurgerMsg = await cookBurger(order);
    const serveBurgerMsg = await serveBurger(cookBurgerMsg);
    console.log(serveBurgerMsg);
  }catch(error){
    console.log("Error: " , error);
  }
}

startBurgerOrder();