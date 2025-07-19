const openBtn = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");

const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click" , ()=>{
  modalOverlay.classList.remove("hidden"); 
});

closeBtn.addEventListener("click" , ()=>{
  modalOverlay.classList.add("hidden");
  
});

// close modal when clicking outside the modal box (on the overlay)

modalOverlay.addEventListener("click" , (e)=>{
  if(e.target === modalOverlay){
    modalOverlay.classList.add("hidden")
  }
});

/* hide the modal when the user presses the escape key*/
document.addEventListener("keydown" , (e)=>{
  if(e.key === "Escape"){
    modalOverlay.classList.add("hidden")
  }
});