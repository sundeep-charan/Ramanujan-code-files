console.log("Connected");

class House {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}

const bungalow = new House("bungalow", "red");

const sundeep = {
  name: "Sundeep",
  greet: () => {
    console.log(this);
    return `Hi ${this.name}`;
  }
};

const greetFunc = sundeep.greet.bind(sundeep);
greetFunc();

function saySomething(n1, n2) {
  console.log(`The values passed are ${n1} and ${n2}`);
  return this.job;
}

const obja = {
  job: "instructor"
};

const objb = {
  job: "developer"
};

const newSaySomething = saySomething.bind(obja);
console.log(saySomething.call(objb));
console.log(saySomething.apply(objb, [1, 3]));
console.log(newSaySomething(4, 5));

function someName() {
  console.log(this);
}
someName();

const button = document.querySelector("button");
let storeEve = null;
button.addEventListener("click", function (event) {
  storeEve = event;
  console.log("Event happening", storeEve.target);
  setTimeout(function () {
    console.log("Event finished", storeEve.target);
  }, 1000);
});
