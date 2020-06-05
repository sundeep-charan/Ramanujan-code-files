console.log("Connected");

var a = 5; // Global scope

// This  => Object who is responsible in calling a method
var sundeep = {
  name: "Sundeep",
  introduce: function () {
    return this.name;
  }
};

function greetGoodMorning() {
  return "Good morning. Have a nice day";
}

function add() {
  console.log(a);
  var num1 = 5; // Function scope
  var num2 = 8; // Function scope
  return num1 + num2;
}

// add();

var message = "Hi there";
function outerFunction() {
  message = "Hello there";
  function innerFunction() {
    message = "Bye there";
    console.log("Inner function called ", message);
  }
  innerFunction();
  console.log("Outer function called ", message);
}

console.log("Window object scope ", message);
outerFunction();
console.log("Still outside the window object ", message);

var something = 4;
var cake = "Strawberry";
function anotherFunction() {
  var something = 5;
  console.log(cake);
  function anotherAnotherFunction() {
    var something = 6;
    var cake = "Chcolate";
    console.log("Another another func", something);
  }
  anotherAnotherFunction();
  console.log("Another function", something);
}

anotherFunction();
console.log("Global function", something);

console.log(sundeep.introduce());

var burger = "cheese";
function addMoreCheese() {
  var burger = "More cheese";
  console.log(burger);
}
window.addMoreCheese();
console.log(burger);
