// Lexical scope defines where functions are written , not where they are called.
/*const outer = () => {
  const name = "Saka";

  const inner = () => {
    console.log("Hi, " + name);
  };

  return inner;
};

const greet = outer();
greet(); // What will this print? */


const outer = () => {
  const name = "Saka";

  return function() {
    const name = "Johnson";
    console.log("Hello, " + name);
  };
};

const greet = outer();
greet();
