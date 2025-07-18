const input = document.getElementById("todo-input");

const addBtn = document.getElementById("add-btn");

const todoList = document.getElementById("todo-list");


// function to add a new task

// .trim() = it is used to remove trailing whitespace before and after a string

function addTask(){
  const task = input.value.trim();

  if(task === ""){
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click" , () => {
    li.classList.toggle("done");
    saveTodos();
  });

  // let's a delete button

  const delBtn = document.createElement("button");


  delBtn.textContent = "X";
  delBtn.addEventListener("click" , () =>{
    todoList.removeChild(li);
    saveTodos();
  });

  li.appendChild(delBtn);
  todoList.appendChild(li);
  input.value = "";
  input.focus();

  saveTodos();
}

addBtn.addEventListener("click" , () =>{
  if (input.value === ""){
    alert("Input is empty");
  }else{
    addTask();
  }
});

input.addEventListener("keydown" , (e)=>{
    if(e.key === "Enter"){
      addTask();
    }
})

// save to localStorage whenever a task is added or removed

function saveTodos(){
  const tasks = [];
  document.querySelectorAll("li").forEach(li => {
    tasks.push({
      text : li.firstChild.textContent,
      done : li.classList.contains("done")
    });
  });

  localStorage.setItem("todos" , JSON.stringify(tasks));
}

function loadTodos() {
  const tasks = JSON.parse(localStorage.getItem("todos")) || [];

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) {
      li.classList.add("done");
    }

    li.addEventListener("click", () => {
      li.classList.toggle("done");
      saveTodos();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", () => {
      todoList.removeChild(li);
      saveTodos();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

// Call this function right away
loadTodos();
