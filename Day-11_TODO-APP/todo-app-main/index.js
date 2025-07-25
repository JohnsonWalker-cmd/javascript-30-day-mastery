const newTodo = document.getElementById("add-todo");

const todoList = document.getElementById("todo_list");

const listItems = document.getElementById("item_count");

const toggleBtn = document.querySelector(".toggle-btn");

const themeIcon = document.getElementById("theme-icon");
let count = 0;

const body = document.body;

function addTodo(newtodo){
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const circle = document.createElement("span");
  circle.classList.add("check-circle");

  circle.style.display = "flex";
  circle.style.alignItems = "center" ;
  circle.style.justifyContent = "center";


  const check = document.createElement("img");
  check.src = "./images/icon-check.svg";
  check.style.display = "none"

  circle.appendChild(check);

  circle.addEventListener("click" , () => {
    circle.style.background = "linear-gradient(to right ,hsl(192, 100%, 67%), hsl(280, 87%, 65%) )" ;

    check.style.display = "block";
    taskText.classList.add("done");
  })

  

  const taskText = document.createElement("p");
  taskText.classList.add("task-text");
  taskText.textContent = newtodo;

  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("delete-btn")
  deleteBtn.textContent = "✕";

  deleteBtn.addEventListener("click", ()=>{
    li.remove();
    
  })

  li.appendChild(circle);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

}

newTodo.addEventListener("keydown" , (e) => {
  if(e.key === "Enter"){
    const task = newTodo.value.trim();
    if(task !== ""){
      addTodo(task);
      count++;
      listItems.textContent = `${count} `;
      newTodo.value = "";
    }
    
  }
})

// Dark and light mode toggle
toggleBtn.addEventListener("click" , () => {
  body.classList.toggle("dark");

  if(body.classList.contains("dark")){
    themeIcon.src = "./images/icon-sun.svg";
  }else{
    themeIcon.src = "./images/icon-moon.svg";
  }
});




