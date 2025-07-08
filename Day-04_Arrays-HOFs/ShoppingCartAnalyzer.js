const cart = [
  { name: "Shirt", price: 25, inStock: true },
  { name: "Shoes", price: 80, inStock: false },
  { name: "Cap", price: 15, inStock: true },
  { name: "Socks", price: 10, inStock: true }
];


function analyzeCart(cart){

  const totalCost = cart.reduce((sum, cart)=>{return sum + cart.price} , 0);

  const itemsInStock = cart.filter(cart => cart.inStock == true);

  const withDiscount = cart.map(item => ({
    name : item.name,
    price: parseFloat((item.price * 0.9).toFixed(2)),
    inStock: item.inStock
  }))
  return {
    totalCost,
    itemsInStock,
    withDiscount
  }
}

const sample = analyzeCart(cart);
console.log(sample);