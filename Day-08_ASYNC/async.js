/*async function myFunction(){
  // this is an async function
}*/

function receiveOrder(){
  return new Promise((resolve ,reject) =>{
    setTimeout(() => {
      const success = true;
      if(success){
         resolve("Order received ✅");
      } else {
        reject("No order recieved");
      } 
    } , 1000);
  });
}

function preparePizza(orderMsg){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`Preparing pizza 🍕 - based on: ${orderMsg}`)
    } , 2000)
  })
}

function deliverPizza(prepMsg){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`Pizza out for delivery 🚴 - based on: ${prepMsg}`);
    },1500);
  });
}

async function startOrder(){
  try{
    const order = await receiveOrder();
    const preparing = await preparePizza(order);
    const delivery = await deliverPizza(preparing);
    console.log(delivery)
  }catch(error){
    Console.log("Error: " , error);
  }
}
startOrder();


