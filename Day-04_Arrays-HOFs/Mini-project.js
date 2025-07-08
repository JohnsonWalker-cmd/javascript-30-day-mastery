
function takeArray(numbers){
  const squared = numbers.map((number)=>{return number * number});
  const even = numbers.filter((number) => {
    if (number % 2 == 0){
      return number;
    }
  });
  const total = numbers.reduce((accumulator , currentValue)=>{return accumulator + currentValue} , 0);

  return {
    squared,
    even,
    total
  };
}
const sample = takeArray([1,2,4,5]);
console.log(sample);