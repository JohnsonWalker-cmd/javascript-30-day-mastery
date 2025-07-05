function createCounter(){
  let count = 0;

  return {
    increment: () => 
      ++count,
    decrement: () => 
      --count,
    getCount: () => 
      count
  };

}

const secureCounter = createCounter();

console.log(secureCounter.increment());
console.log(secureCounter.increment());
console.log(secureCounter.decrement());
console.log(secureCounter.getCount());
