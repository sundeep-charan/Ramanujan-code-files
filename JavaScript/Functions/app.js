console.log("Connected");

// Conventional method for adding multiple pairs of numbers
var a = 5;
var b = 6;

var sum = a + b;
console.log(sum);

var c = 8;
var d = 6;
var sum1 = c + d;
console.log(sum1);

// Function Declaration or definition
function addTwoNumbers() {
  var num1 = parseInt(prompt("Enter number 1"));
  var num2 = parseInt(prompt("Enter number 2"));
  console.log(num1 + num2);
}

// Invoke or call a function
// addTwoNumbers();
// addTwoNumbers();

var a = 5;

var sundeep = {
  name: "Sundeep Charan Ramkumar",
  profession: "Instructor",
  introduce: function () {
    console.log(
      "Hi I am " +
        sundeep["name"] +
        " and I am working as a " +
        sundeep.profession
    );
  }
};

console.log(sundeep.introduce());

// Version 2 - Accepting inputs
function addTwoNumbersWithInputs(number1, number2 = 10) {
  console.log(typeof number2);
  if (typeof number1 !== "number" || typeof number2 !== "number")
    return "Invalid data";
  else return number1 + number2;
}

// If you are not using the return keyword, by default it will use undefined
var key1 = "hi";
var key2 = "there";
var sum = addTwoNumbersWithInputs(key1, key2);
console.log(sum);
