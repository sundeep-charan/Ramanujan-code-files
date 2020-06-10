console.log("Connected");

var googleLink = document.querySelector("a");
var loginForm = document.querySelector("form");
var clickMeButton = document.querySelector(".clickme");
var container = document.querySelector(".container");
var wrapper = document.querySelector(".wrapper");

googleLink.addEventListener("click", function (event) {
  if (event.target.getAttribute("href") === "http://google.com") {
    event.preventDefault();
    console.log("You cannot go further. This website is not allowed");
    return;
  }
  console.log("We have been redirected to another website");
});

// submit => Exclusive for forms
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted", event.target);
  var email = event.target.email;
  var password = event.target.password;
  console.log(email.value, password.value);
});

window.addEventListener("click", function (event) {
  console.log("Window itself has been clicked");
});

container.addEventListener("click", function (event) {
  console.log("Container div has been clicked");
});

wrapper.addEventListener("click", function (event) {
  console.log("Wrapper div has been clicked");
});

clickMeButton.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("I have been clicked");
});
