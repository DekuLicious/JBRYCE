function addTask() {
  var taskName = document.getElementById("taskNameInput").value;
  var dueDate = document.getElementById("dueDateInput").value;

  if (taskName && dueDate) {
    var taskItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(taskName + " (Due: " + dueDate + ")"));

    document.getElementById("taskList").appendChild(taskItem);

    document.getElementById("taskNameInput").value = "";
    document.getElementById("dueDateInput").value = "";
  }
}
