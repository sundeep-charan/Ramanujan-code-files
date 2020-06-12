console.log("Connected");
var data = [
  { number: 5, load: 3000 },
  { number: 6, load: 2000 },
  { number: 2, load: 1000 }
];

function getProduct(numberData) {
  console.log("Function called");
  return new Promise(function (resolveFunction, rejectFunction) {
    setTimeout(function () {
      if (numberData.number ** 2 > 30)
        rejectFunction("The square was greater than 30");
      else resolveFunction(numberData.number ** 2);
    }, numberData.load);
  });
} // [25, 36, 64] or []

// Option 1. We will traverse the data, and then resolve the functions.
// (Total time to resolve is 3 + 2 + 6 => 11 seconds)
// var products = [];
// for (var numberData of data) {
//   getProduct(numberData)
//     .then(function (square) {
//       products.push(square);
//       console.log(products);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// Disadvantage: Couldnt consolidate the data here.
// console.log(products);

// Option 2: Create promises inside the loop and then call Promise.all()
var promises = [];
for (var numberData of data) {
  var promise = getProduct(numberData);
  promises.push(promise);
}
console.log(promises);

Promise.all(promises)
  .then(function (values) {
    // The disadvantage is now solved, here we would be getting all the values resolved by its own promise.

    // Its own disadvatage is that, if any of the promises gets rejected, the subsequent promise consumption will get stopped, all the catch method directly goes fired.
    console.log(values);
  })
  .catch(function (err) {
    console.log(err);
  });

// Option 3: Having all promises run, irrespective of its rejection state.
// Promise.allSettled(promises)
//   .then(function (values) {
//     // The disadvantage is now solved, here we would be getting all the values resolved by its own promise
//     console.log(values);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
