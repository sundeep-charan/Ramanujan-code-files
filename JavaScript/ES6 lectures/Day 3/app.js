console.log("Connected");

// function House(type, address) {
//   this.type = type;
//   this.address = address;
// }

// House.prototype.paint = function () {
//   return `The house of type ${this.type} is being painted`;
// };

// function Bungalow (
//   isGardenAvailable,
//   isSolarPanelAvailable,
//   isSwimminPoolAvailable,
//   type,
//   address
// ) {
//   const house = new House(type, address)
//   house.isGardenAvailable = isGardenAvailable
//   // .....
//   return house
// }

// ES6
class House {
  constructor(type, address) {
    this.type = type;
    this.address = address;
  }

  paint() {
    return `The house of type ${this.type} is being painted`;
  }
}

class Bungalow extends House {
  static getBlueprints(name) {
    return {
      name: name,
      bedroom: { length: 10, breadth: 15 },
      kitchen: { length: 15, breadth: 20 },
      livingRoom: { length: 20, breadth: 30 }
    };
  }

  constructor(
    isGardenAvailable,
    isSolarPanelAvailable,
    isSwimminPoolAvailable,
    type,
    address
  ) {
    super(type, address);
    this.isGardenAvailable = isGardenAvailable;
    this.isSolarPanelAvailable = isSolarPanelAvailable;
    this.isSwimminPoolAvailable = isSwimminPoolAvailable;
  }

  get getIsGardenAvailable() {
    return this.isGardenAvailable;
  }

  set setIsGardenAvaialable(value) {
    this.isGardenAvailable = value;
  }

  toggleLights() {
    return `Switching off the lights`;
  }
}

const bungalow = new Bungalow(true, true, true, "Bungalow", {
  city: "Coimbatore",
  state: "Tamilnadu",
  country: "India"
});

console.log(bungalow);
