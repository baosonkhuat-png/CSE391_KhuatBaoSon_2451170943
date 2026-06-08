const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const itemsLeft = document.getElementById("itemsLeft");
const clearCompleted = document.getElementById("clearCompleted");
const filterButtons = document.querySelectorAll(".filters button");

let todos = [];
let activeFilter = "all";

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const data = localStorage.getItem("todos");
  todos = data ? JSON.parse(data) : [];
}

function getVisibleTodos() {
  return todos.filter((todo) => {
    if (activeFilter === "active") return !todo.completed;
    if (activeFilter === "completed") return todo.completed;
    return true;
  });
}

function updateItemsLeft() {
  const count = todos.filter((todo) => !todo.completed).length;
  itemsLeft.textContent = `${count} item${count === 1 ? "" : "s"} left`;
}

function createTodoItem(todo) {
  const li = document.createElement("li");
  li.className = "todo-item";
  if (todo.completed) {
    li.classList.add("completed");
  }
  li.dataset.id = todo.id;

  const text = document.createElement("p");
  text.className = "text";
  text.textContent = todo.text;
  text.tabIndex = 0;
  text.setAttribute("role", "button");
  text.setAttribute("aria-label", `Toggle todo ${todo.text}`);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "❌";
  deleteBtn.setAttribute("aria-label", `Delete ${todo.text}`);

  li.append(text, deleteBtn);
  return li;
}

function renderTodos() {
  todoList.innerHTML = "";
  const visibleTodos = getVisibleTodos();
  visibleTodos.forEach((todo) => {
    todoList.appendChild(createTodoItem(todo));
  });
  updateItemsLeft();
  saveTodos();
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderTodos();
}

function addTodo(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  todos.push({
    id: Date.now().toString(),
    text: trimmed,
    completed: false,
  });
  todoInput.value = "";
  renderTodos();
  todoInput.focus();
}

function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function editTodo(id, newText) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText.trim() || todo.text } : todo
  );
  renderTodos();
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(todoInput.value);
});

todoList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  const id = li.dataset.id;

  if (event.target.classList.contains("delete-btn")) {
    deleteTodo(id);
    return;
  }

  if (event.target.classList.contains("text")) {
    toggleTodo(id);
  }
});

todoList.addEventListener("dblclick", (event) => {
  const textElement = event.target.closest(".text");
  if (!textElement) return;
  const li = event.target.closest("li");
  const id = li.dataset.id;
  const currentText = textElement.textContent;

  const input = document.createElement("input");
  input.type = "text";
  input.className = "edit-input";
  input.value = currentText;

  li.replaceChild(input, textElement);
  input.focus();

  function finishEdit() {
    editTodo(id, input.value);
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      finishEdit();
    }
    if (e.key === "Escape") {
      renderTodos();
    }
  });

  input.addEventListener("blur", finishEdit);
});

clearCompleted.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  renderTodos();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

loadTodos();
renderTodos();
