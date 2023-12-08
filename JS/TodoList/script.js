var tasks = JSON.parse(localStorage.getItem("myTasks"));
if (tasks == null) {
  var tasks = [];
}

createTable();

function createTable() {
  var result = `<table border="1" cellSpacing="0" style="margin-left:auto;margin-right:auto">`;
  for (var index = 0; index < tasks.length; index++) {
    result += `
      <tr>
        <td ${tasks[index].taskDone ? 'style="text-decoration: line-through;"' : ""}>${tasks[index].taskName}</td>
        <td ${tasks[index].taskDone ? 'style="text-decoration: line-through;"' : ""}>${tasks[index].taskDate}</td>
        <td><input type="checkbox" ${tasks[index].taskDone ? "checked" : ""} onchange="toggleTaskDone(${index})"/></td>
      </tr>
    `;
  }
  result += "</table>";
  document.getElementById("taskList").innerHTML = result;
}

function Tasks(taskName, taskDate, taskDone) {
  this.taskName = taskName;
  this.taskDate = taskDate;
  this.taskDone = taskDone;

  this.taskIsDone = function () {
    this.taskDone = true;
  };
}

const saveTasks = () => {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
};

const addTask = () => {
  var taskName = document.getElementById("taskName").value;
  var taskDate = document.getElementById("taskDate").value;
  tasks.push(new Tasks(taskName, taskDate, false));
  createTable();
  saveTasks();
};

const clearTasks = () => {
  localStorage.removeItem("myTasks");
  tasks = [];
  createTable();
};

const toggleTaskDone = (index) => {
  tasks[index].taskDone = !tasks[index].taskDone;
  createTable();
  saveTasks();
};
