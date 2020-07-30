const { createTodo } = require("./utils");

// Variables
const createForm = document.querySelector(".create-form");
const list = document.querySelector(".list");

createForm.addEventListener("submit", e => {
  e.preventDefault();
  const title = e.target.title;
  const body = e.target.body;
  const todoListItem = createTodo(title.value, body.value);
  list.insertAdjacentHTML("beforeend", todoListItem);
});
