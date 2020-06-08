// // Callbacks
// // A way to automatically invoke a function that has been passed as a argument to another function.

function checkNumber(callBackFunction, number) {
  // Checks the number position between 10 and 20
  var errorMessage = null;
  if (number < 10) {
    // The number is less than 10
    errorMessage = "The number is less than 10";
    callBackFunction(errorMessage, null);
  } else if (number > 20) {
    // The number is greater than 20
    errorMessage = "The number is greater than 20";
    callBackFunction(errorMessage, null);
  } else {
    // The number is between 10 and 20.
    callBackFunction(null, "The number " + number + " is between 10 and 20");
  }
}

checkNumber(callBackFunction, 9);

// Callback function
function callBackFunction(err, result) {
  console.log(err, result);
  if (err !== null) {
    alert("ERROR: " + err);
  } else {
    console.log(result);
  }
}

var h2Element = document.querySelector("h2");
function clickCallbackFunction() {
  console.log("I am being clicked");
}
h2Element.addEventListener("click", clickCallbackFunction);
