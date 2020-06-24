console.log("Connected");

// ES6 - Day 2
// console.log(iceCream);

// let iceCream;

let API_URL = "https://reqres.in";
API_URL = 3;

const numbers1 = [1, 2, 3, 4];
numbers1[0] = 5;
const object = { name: "sundeep", age: 21 };
object.name = "Charan";
object.job = "instructor";
// object = { name: "sundeep", age: 21 };
console.log(numbers1, object);

console.log(API_URL);

function sayHello() {
  let d = 7;
  var a = 5;
  if (a < 10) {
    let b = 6;
    var c = 10;
  }
  console.log(a, c, d);
}

sayHello();

const data = {
  id: 1,
  name: "Goku",
  species: "Saiyan",
  planet: "Vegeta",
  currentPlanet: "earth"
};

// let name = data.name
// let currentPlanet = data.currentPlanet
// let species = data.species
// species = "Namik"
// data.species = "Namik"
let { species: currentSpecies } = data;
species = "Namik";
console.log(species, data);

const numbers = [4, 5, 6, 7];
// let firstNumber = numbers[0],
// secondNumber = numbers[1],
// thirdNumber = numbers[2]
let [firstNumber, , , fourthNumber] = numbers;
console.log(firstNumber, fourthNumber);

// function formatDBZCharacter(data) {
//   // let name = data.name;
//   // let currentPlanet = data.currentPlanet;
//   let { currentPlanet, name } = data;
//   // return `
//   // Name: ${name}
//   // Current Planet: ${currentPlanet}
//   // `;

//   return '\nName: "hi there"' + name + "\nCurrent Planet: " + currentPlanet;
// }

//console.log(formatDBZCharacter(data));

//window.formatDBZCharacter();

// Arrow functions
const add = function (a) {
  return a + 19;
};

// =>
// Implicity return without the curly braces
// If parameter count is 0 or greater than 1, parantheses is must.
// Or else no need.
const addArrow = a => a + 19;

const fetchDataRegular = function (url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

const fetchData = url =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
  );

fetchData("https://reqres.in/api/users")
  .then(res => console.log(res))
  .catch(err => console.log(err));

console.log(add(3), addArrow(10), addArrow(59), addArrow(21));

const Car = function (brand, model) {
  this.brand = brand;
  this.model = model;
};

Car.prototype.drive = () => {
  return `I am driving a ${this.brand} car`;
};

const maruti = new Car("maruti", "800 AC");
console.log(maruti);
