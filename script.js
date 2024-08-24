// Function to add a task
function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;
  if (task.trim() !== "") {
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");

    // Create the task text
    var taskText = document.createTextNode(task);

    // Create the delete button
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";

    // Append the task and the delete button to the list item
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    // Add delete functionality
    deleteButton.onclick = function () {
      ul.removeChild(li);
      deleteTaskFromLocalStorage(task);
    };

    // Add the list item to the list
    ul.appendChild(li);

    // Clear the input field
    input.value = "";

    // Save task to local storage
    saveTasksToLocalStorage(task);
  }
}

// Function to delete a task from local storage
function deleteTaskFromLocalStorage(task) {
  var tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  // Find the task index and remove it from the array
  tasks.splice(tasks.indexOf(task), 1);

  // Update local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  var tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  var ul = document.getElementById("taskList");
  tasks.forEach(function (task) {
    var li = document.createElement("li");
    var taskText = document.createTextNode(task);

    // Create the delete button
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";

    // Append the task and the delete button to the list item
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    // Add delete functionality
    deleteButton.onclick = function () {
      ul.removeChild(li);
      deleteTaskFromLocalStorage(task);
    };

    ul.appendChild(li);
  });
}

// Load tasks when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadTasksFromLocalStorage();
});
