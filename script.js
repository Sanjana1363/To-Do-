function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  let taskList = document.getElementById("taskList");
  let li = document.createElement("li");
  li.className = " d-flex justify-content-between align-items-center";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  let deleteBtn = document.createElement("button");

  deleteBtn.className = "btn btn-sm btn-danger ml-2";
  deleteBtn.onclick = function () {
    taskList.remove(li);
  };

  li.append(checkbox);
  li.append(document.createTextNode(taskText));
  li.append(deleteBtn);
  taskList.append(li);
  taskInput.value = "";
}
