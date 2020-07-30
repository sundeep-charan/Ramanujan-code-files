function logHOF(outerFunction, logStatement) {
  return function (...args) {
    console.log(logStatement, "Arguments: ", ...args);
    return outerFunction(...args);
  };
}

function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const combineHOF = logHOF(combineArrays, "Combining Arrays");
const combinedArray = combineHOF([1, 2, 3], [4, 5, 6]);
console.log(combinedArray);

const state = {
  items: [],
  flowers: [],
  cars: []
};

// function spitNumbers(n1, n2, n3, n4) {
//   console.log(n1, n2, n3, n4);
//   // console.log(numbers);
// }

// const numbers = [1, 2, 3, 4];

// spitNumbers(...numbers);
// spitNumbers(1, 2, 3, 4);
