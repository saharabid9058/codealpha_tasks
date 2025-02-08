const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const dueDateInput = document.getElementById("due-date");
const pendingList = document.getElementById("task-list");
const completedList = document.getElementById("completed-tasks");
const missingList = document.getElementById("missing-tasks");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
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
    li.querySelector(".complete-btn").addEventListener("click", function () {
        if (li.classList.contains("pending")) {
            li.classList.remove("pending");
            li.classList.add("completed");
            completedList.appendChild(li);
        }
    });
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });
    setInterval(() => checkDueDate(li, taskDueDate), 1000);
}
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
