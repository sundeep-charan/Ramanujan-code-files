function hi() {
  return function () {
    return "Bye there";
  };
}

var byeFunction = hi();
var byeReturnedText = byeFunction();

console.log(byeReturnedText);

console.log(hi()());

function a() {
  return function b() {
    return function c() {
      return "I am the third level function";
    };
  };
}

var bFunction = a();
var cFunction = bFunction();
var cFunctionReturnText = cFunction();
console.log(cFunctionReturnText);

console.log(a()()());

// Closure
function makeMultiplicationTable(firstNumber) {
  var pizza = "mozarella";
  return function (secondNumber) {
    console.log(pizza);
    return function (thirdNumber) {
      return firstNumber * secondNumber + thirdNumber;
    };
  };
}

// var sixTable = makeMultiplicationTable(6);
// var sevenTable = makeMultiplicationTable(7);
// console.log(sixTable(9));
// console.log(sevenTable(10));

// console.log(makeMultiplicationTable(8)(2));

// 6 * 5 + 4 = 34
console.log(makeMultiplicationTable(6)(5)(4));

function firstLevel(message) {
  function (secondMessage) {
    return message + " " + secondMessage;
  };
}
console.log(firstLevel("Hi")("There"));
