const  tasks = [];

function addTask(name){
  const newTask = {
    id : tasks.length + 1,
    name : name,
    completed : false
  }
  tasks.push(newTask);
  return newTask; 
}

// to mark a task as completed 

function taskCompleted(tasks){
  tasks.completed == true;
  return ` Task ${tasks.id} completed` ;
    
}


// completed tasks
function completedTask(tasks){
  const completedTasks = tasks.find(t => t.completed);
  if (completedTasks){
    completedTasks.completed = true;
    `Task "${completedTasks.name}" marked as completed` ;
    return ;
  }else if (!completedTasks){
    return "Task not found" ;
  }
    
}

function listTasks(tasks){
  const logTasks = tasks.map(task => ({
    id: task.id,
    name : task.name,
    completed : task.completed
  }))

  return logTasks ;
}

function filterTasks(tasks, filterType){

  if(filterType === "completed"){
    return tasks.filter(t => t.completed)
  }else if ( filterType === "pending"){
    return tasks.filter(t => !t.completed);
  }else {
    return tasks;
  }
}


console.log(addTask("Go for class"));
console.log(addTask("Go to the gym"));
console.log(addTask("Work on assignments"));
console.log(addTask("Visit my mum"));
console.log(addTask("Washing my hair"));

// view all tasks
console.log(tasks);

// mark as completed
console.log(taskCompleted(tasks[1]));
console.log(completedTask(tasks[1]));

