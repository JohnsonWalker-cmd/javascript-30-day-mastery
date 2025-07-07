function quizEngine(question, callback){
  console.log(question);
  setTimeout(() =>{
    console.log("Thinking")
    callback();
  } , 1000)
  

  

  
}
const username = "Saka";

function youGo(){
  setTimeout(() => {
    console.log("Your answer is: Blue!");
  } , 2000);
  console.log ("Thanks for answering, " + username + "!");
}

quizEngine("What is your favorite color?" , youGo);
/* 
🧠 Outcome:
You now understand how:

Functions can be passed as values (callbacks)

Lexical scope allows access to parent variables

setTimeout() enables asynchronous patterns in JavaScript
*/