// Todo-lista
const todoList = [
  { id: 1, task: 'Learn HTML', completed: true },
  { id: 2, task: 'Learn CSS', completed: true },
  { id: 3, task: 'Learn JS', completed: false },
  { id: 4, task: 'Learn TypeScript', completed: false },
  { id: 5, task: 'Learn React', completed: false },
];

// Funktio renderöimään lista
function renderList() {
  const ul = document.getElementById('todo-list');
  ul.innerHTML = ''; // Tyhjennetään lista ennen täyttämistä
  todoList.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="checkbox-${item.id}" ${item.completed ? 'checked' : ''} />
      <label for="checkbox-${item.id}">${item.task}</label>
      <button class="delete-btn" onclick="deleteTodo(${item.id})">Delete</button>
    `;
    ul.appendChild(li);
  });
}

// Funktio lisäämään tehtävän
document.querySelector('.add-btn').addEventListener('click', () => {
  const dialog = document.querySelector('dialog');
  dialog.showModal();
});

// Kun lomake lähetetään, lisätään uusi tehtävä
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodoText = document.getElementById('new-todo').value;
  if (newTodoText) {
    todoList.push({ id: Date.now(), task: newTodoText, completed: false });
    document.getElementById('new-todo').value = ''; // Tyhjennetään kenttä
    renderList(); // Päivitetään lista
    document.querySelector('dialog').close(); // Suljetaan modal
  }
});

// Funktio poistamaan tehtävä
function deleteTodo(id) {
  const index = todoList.findIndex(item => item.id === id);
  if (index !== -1) {
    todoList.splice(index, 1); // Poistetaan tehtävä listasta
    renderList(); // Päivitetään lista
  }
}

// Funktio päivittää tehtävän "valmis" tilan
document.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const id = e.target.id.split('-')[1];
    const todo = todoList.find(item => item.id == id);
    todo.completed = e.target.checked; // Päivitetään valmis-tila
    renderList(); // Päivitetään lista
  }
});

// Alustetaan lista
renderList();
