console.log("Connected");

const numbers = [1, 2, 3, 4];

console.log(numbers);

const idSymbol = Symbol("id");
const data = { id: 12, numbers: [1, 2, 3], [idSymbol]: 42 };

console.log(data);

const hobbies = "basketball";

const sundeep = {
  name: "Sundeep",
  age: 21,
  job: "instructor",
  [hobbies]: ["reading", "playing"]
};

console.log(sundeep);

// Iterators
const someNumbers = [2, 4, 6, 8, 10];
const numberIterator = someNumbers[Symbol.iterator]();
console.log(numberIterator);
// console.log(numberIterator.next());

// 1, 8, 27, 64, 125, 256, ......
const generateCubeNumbers = (limit = 10) => {
  return {
    [Symbol.iterator]: function () {
      let counter = 1;
      return {
        next: function () {
          let obj = null;
          while (counter <= limit) {
            obj = { value: counter * counter * counter, done: false };
            counter++;
            return obj;
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
};

const cubeNumberIteratorObject = generateCubeNumbers(2);
const cubeNumberIterator = cubeNumberIteratorObject[Symbol.iterator]();

console.log(cubeNumberIterator.next());
console.log(cubeNumberIterator.next());
console.log(cubeNumberIterator.next());

for (let cubeNumber of cubeNumberIteratorObject) {
  console.log(cubeNumber);
}

// Generators
function* generatorFunction() {
  yield 6;
  yield 7;
  yield 8;
  return 10;
}

function someFunc() {
  return "Good afternoon";
}

const generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let number of generator) {
  console.log(number);
}

const message = someFunc();
console.log(message);

// Cube number fetch using generators
function* cubeNumberGenerator(limit = 10) {
  let counter = 1;
  while (counter <= limit) {
    yield counter * counter * counter;
    counter++;
  }
  return undefined;
}

const cubeIterator = cubeNumberGenerator(5);
// console.log(cubeIterator.next());
// console.log(cubeIterator.next());
// console.log(cubeIterator.next());

function dangerous() {
  while (true) {
    console.log("Hi");
  }
}

function* dangerousGenerator() {
  let counter = 1;
  while (true) {
    yield counter;
    counter++;
  }
}

const dangerIterator = dangerousGenerator();
