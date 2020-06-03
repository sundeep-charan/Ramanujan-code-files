console.log("Hi there");

// Use "this" keyword to represent the current object
var human = {
  name: "Sundeep Charan Ramkumar",
  age: 21,
  profession: "Instructor",
  introduce: function () {
    return (
      "Hi there. I am " +
      this.name +
      " of age " +
      this.age +
      " working as a " +
      this.profession
    );
  }
};

// Use "this" keyword to point out the current child object inside a function constructor.

// Custom data type
function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}

// Common shareable method
Person.prototype.introduce = function () {
  return (
    "Hi there. I am " +
    this.name +
    " of age " +
    this.age +
    " working as a " +
    this.profession
  );
};

var sundeep = new Person("Sundeep", 21, "Instructor");
var bagesh = new Person("Bagesh", 23, "Student");
console.log(bagesh, sundeep);

// Prototypical Inheritance
function Car(cc, isFourWheelDrive) {
  this.cc = cc;
  this.isFourWheelDrive = isFourWheelDrive;
}

Car.prototype.drive = function () {
  return "I am driving " + this.model;
};

Car.prototype.honk = function () {
  return "I am honking my";
};

Car.prototype.refuel = function () {
  return "I am refueling";
};

function Audi(model, color, cc, isFourWheelDrive) {
  var audi = new Car(cc, isFourWheelDrive);
  audi.model = model;
  audi.color = color;
  return audi;
}

// Extended the Car's function constructor to Audi's function constructor
// Child prototpye = Parent prototype
Audi.prototype = Car.prototype;

Audi.prototype.drl = function () {
  return "I am blowinng up the DRL" + this.cc;
};

Audi.prototype.climateControl = function () {
  return "Climate control on";
};

var audiA8 = Audi("A8", "red", 3000, false);
console.log(audiA8);

String.prototype.sarcastic = function () {
  var sarcasticText = "aPpLe";
  // this === "apple"
  // "apple".split("") => ["a", "p", "p", "l", "e"]
  // 0, 1, 2, 3, 4, 5
  for (letterIndex in this.split("")) {
    if (letterIndex % 2 !== 0)
      sarcasticText = sarcasticText + this[letterIndex].toUpperCase();
    else sarcasticText = sarcasticText + this[letterIndex];
  }
  return sarcasticText;
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return this.name + " " + this.age;
  }
}
