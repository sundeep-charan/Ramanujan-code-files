var draggableDivs = [...document.querySelectorAll('div[draggable="true"]')];
var container = document.querySelector(".container");

var primaryElement = null;
var secondaryElement = null;

container.addEventListener("dragend", function (event) {
  console.log("Drag end");
});

container.addEventListener("dragenter", function (event) {
  event.preventDefault();
  console.log("Drag enter");
});
container.addEventListener("dragexit", function (event) {
  console.log("Drag exit");
});
container.addEventListener("dragleave", function (event) {
  console.log("Drag leave");
});

container.addEventListener("dragover", function (event) {
  event.preventDefault();
});

container.addEventListener("dragstart", function (event) {
  primaryElement = event.target;
  console.log("Drag start");
});

container.addEventListener("drop", function (event) {
  // Getting the element beneath the draggable element
  secondaryElement = event.target;
  // Swapping the colors
  var tempColor = secondaryElement.style.background;
  secondaryElement.style.background = primaryElement.style.background;
  primaryElement.style.background = tempColor;
});
