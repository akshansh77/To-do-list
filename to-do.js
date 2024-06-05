function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskInput.value;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = function() {
            span.style.textDecoration = 'line-through';
        };

        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(removeButton);

        taskList.appendChild(li);

        taskInput.value = '';
    }
}
