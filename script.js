const tasks = ['Reviser git status', 'Faire un premier commit'];
const taskList = document.querySelector('#taskList');
const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = taskInput.value.trim();
  if (!value) return;
  tasks.push(value);
  taskInput.value = '';
  renderTasks();
});

renderTasks();

