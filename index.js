const taskInput = document.getElementById('taskInput');
const contentBody = document.querySelector('.content-body');

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const task = taskInput.value;
        if (task.trim() !== '') {
            const newTask = createTaskNode(task);
            contentBody.insertBefore(newTask, contentBody.firstChild);
            taskInput.value = '';
        }
    }
});

function createTaskNode(task) {
    const taskNode = document.createElement('div');
    taskNode.textContent = task;
    taskNode.classList.add('content-body__section');

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function () {
        contentBody.removeChild(taskNode);
    });

    taskNode.appendChild(deleteButton);

    taskNode.addEventListener('mouseover', function () {
        taskNode.style.color = 'orange';
    });

    taskNode.addEventListener('mouseout', function () {
        taskNode.style.color = 'rgb(49, 65, 92)';
    });

    return taskNode;
}
