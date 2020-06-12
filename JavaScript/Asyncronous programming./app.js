console.log("Connected");

// setTimeout - Event loop
// setTimeout(function () {
//   console.log("Hello world");
// }, 2000);

// setInterval - Event loop
// setInterval(function () {
//   console.log("I am getting repeated");
// }, 2000);

// Problem statement
/**
 * define, adds 2 numbers, 5000 => result
 * IF sum > 20, err
 * ELSE result
 */
function addNumbersSlowly(callbackFunction, a, b) {
  setTimeout(function () {
    var sum = a + b;
    if (sum > 20) {
      callbackFunction("Sum is greater than 20", null);
    } else {
      callbackFunction(null, sum);
    }
  }, 5000);
}

function callbackFunction(err, result) {
  if (err !== null) alert(err);
  else {
    console.log(result);
  }
}

addNumbersSlowly(callbackFunction, 10, 5);

function addNumbersPromise(a, b) {
  return new Promise(function (resolveFunction, rejectFunction) {
    setTimeout(function () {
      var sum = a + b;
      if (sum > 20) {
        // Error.
        rejectFunction("Sum is greater than 20");
      } else {
        resolveFunction(`The Sum is ${sum}`);
      }
    }, 3000);
  });
}

function add(a, b) {
  return a + b;
}

addNumbersPromise(10, 0)
  .then(function (result) {
    console.log("First then method");
    return new Promise(function (res, rej) {
      setTimeout(function () {
        res(55);
      }, 1000);
    });
  })
  .then(function (kickResult) {
    console.log("Second then method");
    return (
      "Hi I am the last guy who is going to give the result of " + kickResult
    );
  })
  .then(function (lastResult) {
    console.log("third then method");
    console.log(lastResult);
  })
  .catch(function (err) {
    alert(`Error: ${err}`);
  });

console.log("Process ended");

decipherText("Sundeep", 3, function (err, result) {
  if (err) alert(err);
  else console.log(result); // "Vxpghhs"
});
