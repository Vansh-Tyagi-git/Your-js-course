// Advanced: To-Do List with Arrays
const content = document.getElementById('content');
const todoList = [
  { name: 'Random', dueDate: '2025-12-30' },
  { name: 'Random2', dueDate: '2025-12-29' }
];

function renderTodoList() {
  let html = '';
  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate } = todoList[i];
    html += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete" onclick="deleteTodo(${i})">Delete</button>
      <br>
    `;
  }
  content.innerHTML = `
    <p>ToDo List</p>
    <div class="todo-input-grid">
      <input placeholder="ToDo name" class="js-input-name">
      <input type="date" class="js-input-date">
      <button class="js-add" onclick="addTodo();">Add</button>
    </div>
    <div class="js-todo-list todo-grid">${html}</div>
  `;
}
window.addTodo = function() {
  const inputName = document.querySelector('.js-input-name').value;
  const inputDate = document.querySelector('.js-input-date').value;
  if (inputName && inputDate) {
    todoList.push({ name: inputName, dueDate: inputDate });
    document.querySelector('.js-input-name').value = '';
    document.querySelector('.js-input-date').value = '';
  }
  renderTodoList();
};
window.deleteTodo = function(index) {
  todoList.splice(index, 1);
  renderTodoList();
};
renderTodoList();
