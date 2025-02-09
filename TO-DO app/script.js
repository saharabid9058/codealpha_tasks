// Select elements
const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const dueDateInput = document.getElementById("due-date");
const pendingList = document.getElementById("task-list");
const completedList = document.getElementById("completed-tasks");
const missingList = document.getElementById("missing-tasks");

// Add Task on Button Click
addBtn.addEventListener("click", addTask);

// Add Task on Enter Key
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to Add Task
function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText === "" || dueDate === "") {
        alert("⚠️ Please enter both task and due date!");
        return;
    }

    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
        <div>
            <span>${taskText}</span><br>
            <small>Due: ${dueDate}</small>
        </div>
        <div>
            <button class="complete-btn">✅</button>
            <button class="delete-btn">🗑️</button>
        </div>
    `;

    // Place task based on due date
    const currentDate = new Date();
    const taskDueDate = new Date(dueDate);

    if (taskDueDate < currentDate) {
        li.classList.add("missing");
        missingList.appendChild(li);
    } else {
        li.classList.add("pending");
        pendingList.appendChild(li);
    }

    taskInput.value = "";
    dueDateInput.value = "";

    // Complete Task Button
    li.querySelector(".complete-btn").addEventListener("click", function () {
        if (li.classList.contains("pending")) {
            li.classList.remove("pending");
            li.classList.add("completed");
            completedList.appendChild(li);
        }
    });

    // Delete Task Button
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });

    // Periodically Check for Missing Tasks
    setInterval(() => checkDueDate(li, taskDueDate), 1000);
}

// Function to Check Due Date
function checkDueDate(taskItem, dueDate) {
    const currentDate = new Date();
    if (currentDate > dueDate && !taskItem.classList.contains("completed")) {
        if (!taskItem.classList.contains("missing")) {
            taskItem.classList.remove("pending");
            taskItem.classList.add("missing");
            missingList.appendChild(taskItem);
        }
    }
}
