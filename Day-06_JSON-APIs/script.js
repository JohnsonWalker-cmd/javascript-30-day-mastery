// ffetch request

const button = document.getElementById("getFact");
const display = document.getElementById("factDisplay");

button.addEventListener("click" , () => {
  display.textContent = "Loading...";
  fetch("https://catfact.ninja/fact")
  .then(response => response.json())
  .then(data => {
    display.textContent = data.fact;
  })
  .catch(error => {
    display.textContent = "Failed to fetch cat fact 😿";
    console.error("Something went wrong:" , error);
  });
});


