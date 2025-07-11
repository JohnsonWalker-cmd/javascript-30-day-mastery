const catButton = document.getElementById("catFact");
const dogButton = document.getElementById("dogFact");

const Display = document.getElementById("factDisplay");

catButton.addEventListener("click" , () => {
  Display.textContent = "Loading..."

  fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
      Display.textContent = data.fact;
    })
    .catch(error =>{
      Display.textContent = "Failed to display a cat fact";
      console.log("Something went wrong" , error);
    });

});

dogButton.addEventListener("click" , () => {
  Display.textContent = "Loading..."

  fetch("https://dog-api.kinduff.com/api/facts")
    .then(response => response.json())
    .then(data => {
      Display.textContent = data.facts[0];
    })
    .catch(error =>{
      Display.textContent = "Failed to display a dog fact";
      console.log("Something went wrong" , error);
    });

});

