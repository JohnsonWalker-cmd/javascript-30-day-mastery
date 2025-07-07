function askQuestion(question, callback) {
  console.log(question);
  callback();
}

function sayThanks() {
  console.log("Thanks for answering!");
}

askQuestion("What is your favorite JS feature?", sayThanks);


function Okay(question, sayGoodbye){
  console.log(question);
  sayGoodbye();
}

/*function sayGoodbye() {
  console.log("Goodbye, Saka!");
}*/

Okay("What is your favorite JS feature?", () => {
  console.log("Goodbye, Saka!");
});  // Anonymous function as a callback