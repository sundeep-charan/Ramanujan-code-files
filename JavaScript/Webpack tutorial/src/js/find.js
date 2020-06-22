function find(selector) {
  return document.querySelector(selector);
}

function findAll(selector) {
  return document.querySelectorAll(selector);
}

export default {
  find: find,
  findAll: findAll
};
