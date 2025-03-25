// array for todo list
const todoList = [
  { id: 1, task: "Learn HTML", completed: true },
  { id: 2, task: "Learn CSS", completed: true },
  { id: 3, task: "Learn JS", completed: false },
  { id: 4, task: "Learn TypeScript", completed: false },
  { id: 5, task: "Learn React", completed: false }
];

// Haetaan <ul>-elementti HTML:stä
const ulElement = document.querySelector("ul");

// Käydään läpi tehtävälista ja lisätään tehtävät DOM-menetelmillä
todoList.forEach(todo => {
  // Luodaan <li> elementti
  const li = document.createElement("li");

  // Luodaan <input> (checkbox)
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed; // Jos completed on true, checkbox on valittu

  // Luodaan <label> ja lisätään for-attribuutti (htmlFor)
  const label = document.createElement("label");
  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;

  // Lisätään checkbox ja label <li>-elementtiin
  li.appendChild(checkbox);
  li.appendChild(label);

  // Lisätään <li> HTML:n <ul>-elementtiin
  ulElement.appendChild(li);
});
