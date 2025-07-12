const dropDown = document.getElementById("activities");
const boredButton = document.getElementById("boredbtn")

const display = document.getElementById("display-act");

boredButton.addEventListener("click" , ()=>{
  const selectedType = dropDown.value;
  const apiURL = `https://www.boredapi.com/api/activity?type=${selectedType}`;

  display.textContent = "Loading..."
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      display.innerHTML = `
        <p><strong>Activity:</strong> ${data.activity}</p>
        <p><strong>Type:</strong> ${data.type}</p>
        <p><strong>Participants:</strong> ${data.participants}</p>
      `
    })
    .catch(error => {
      display.textContent = "Couldn't fetch an activity. Try again.";
      console.log("Error:" , error)
    });
});