document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    var taskInput = document.getElementById('task');
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    taskInput.value = '';

    var taskList = document.getElementById('taskList');
    var taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <span class="delete" onclick="deleteTask(this)">Delete</span>
    `;

    taskList.appendChild(taskItem);
}

function deleteTask(deleteBtn) {
    var taskList = document.getElementById('taskList');
    taskList.removeChild(deleteBtn.parentElement);
}
