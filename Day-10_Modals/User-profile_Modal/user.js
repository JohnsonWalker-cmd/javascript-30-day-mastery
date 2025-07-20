const kofiBtn = document.getElementById("viewModalKofi");
const amaBtn = document.getElementById("viewModalAma");
const anaBtn = document.getElementById("viewModalAnna");

const closeBtn = document.getElementById("closeModal");

const openOverlay = document.getElementById("showOverlay");

const nameBox = document.querySelector(".person_name");

const description = document.querySelector(".person_description");


const users = [
  {
    name : "Kofi Agyapong",
    description : "A junior Frontend developer"
  },
  {
    name : "Ama Darlington",
    description: "A cloud developer with 16years of experience"
  },
  {
    name : "Anna Kwakye",
    description : "A philosophist"
  }
];


function showModal(user){
  openOverlay.classList.remove("hidden")
  nameBox.textContent = user.name;
  description.textContent = user.description;
}

kofiBtn.addEventListener("click" , ()=>{
    showModal(users[0]);
});

amaBtn.addEventListener("click" , ()=>{
  showModal(users[1]);
});
anaBtn.addEventListener("click" , ()=>{
  showModal(users[2]);
});


closeBtn.addEventListener("click" , ()=>{
  openOverlay.classList.add("hidden");
});