function placeOrder(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const success = true ;
      if(success){
        resolve("Order for fries and burger placed successfully");
      }else{
        reject("Order failed");
      }
    }, 2000)
  });
}

function cookBurger(orderMsg){
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve(`Burger is cooking - based on ${orderMsg}`);
    }, 1000)
    
  });
}

function fryFries(orderMsg){
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Fries are underway - based on ${orderMsg}`)
    } , 1000)
  });
}

function makeDrink(orderMsg){
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(`Drink is ready - based on ${orderMsg}`);
    } , 1000)
  });
}

function serveCombo([burgerMsg , friesMsg, drinkMsg]){
  return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(`🍟🍔 Combo ready: \n${burgerMsg} \n ${friesMsg} \n ${drinkMsg}`);
      },1000)
  });
}


async function startBurgerOrder(){
  try{
    const order = await placeOrder();

    const [burgerMsg , friesMsg , drinkMsg] = await Promise.all([
        cookBurger(order),
        fryFries(order),
        makeDrink(order)
    ]);

    const combo = await serveCombo([burgerMsg,friesMsg, drinkMsg]);
    console.log(combo);
    
  }catch(error){
    console.log("Error:" , error)
  }
}

startBurgerOrder();