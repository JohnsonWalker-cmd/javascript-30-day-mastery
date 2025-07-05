const init = () => {
  var name = "Mozilla"; // name is a local variable created by init
  const displayName = () =>{
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


// Nested functions have access to variables declared in their outer scope.

const createSecret = () => {
  let secret = "🕵️ Confidential";

  const reveal = () => {
    console.log(secret);
  };

  const lowKey = () => {
    console.log("Lowkey " + secret);
  }

  reveal();
  lowKey();
}
createSecret(); 






function createWallet() {
  let balance = 0;

  return {
    deposit: (amount) => balance += amount,
    checkBalance: () => balance
  };
}

const myWallet = createWallet();
myWallet.deposit(100);
console.log(myWallet.checkBalance()); // 100
