function addTask() {
  var taskName = document.getElementById("task-name").value;
  var dueDate = document.getElementById("due-date").value;

  var list = document.getElementById("task-list");
  var taskItem = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  taskItem.innerText = `${taskName} - Due: ${dueDate}`;
  taskItem.prepend(checkbox);
  list.appendChild(taskItem);
}
