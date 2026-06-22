const tasks = ['Reviser git status', 'Faire un premier commit'];
const taskList = document.querySelector('#taskList');

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}

renderTasks();

