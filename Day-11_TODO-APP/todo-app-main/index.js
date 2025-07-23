const newTodo = document.getElementById("add-todo");

const todoList = document.getElementById("todo_list");

// newTodo.value = "Walker" ;

function addTodo(newtodo){
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const circle = document.createElement("span");
  circle.classList.add("check-circle");

  const taskText = document.createElement("p");
  taskText.classList.add("task-text");
  taskText.textContent = newtodo;

  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("delete-btn")
  deleteBtn.textContent = "✕";

  deleteBtn.addEventListener("click" , ()=>{
    // li.remove();
    taskText.classList.toggle("done");
  });

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
      newTodo.value = "";
    }
    
  }
})

