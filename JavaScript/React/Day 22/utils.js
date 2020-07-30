function constructTodo(title = "", body = "") {
  if (title.length === 0 || body.length === 0) return undefined;
  return { title, body };
}

function constructElement(todo) {
  return `<li><p>${todo.title}</p><p>${todo.body}</p></li>`;
}

function createTodo(title, body) {
  // Construct a todo
  const todo = constructTodo(title, body);
  if (!todo) return null;
  // Inject element to DOM
  const todoListItem = constructElement(todo);
  return todoListItem;
}

module.exports = {
  constructTodo,
  constructElement,
  createTodo
};
