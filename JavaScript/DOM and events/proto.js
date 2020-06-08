class Phone {
  constructor(type, model) {
    this.type = type;
    this.model = model;
  }

  canMakeCall() {
    return "can make a call";
  }
}

class Landline extends Phone {
  constructor(type, model, wireless) {
    super(type, model);
    this.wireless = wireless;
  }

  redial() {
    return "it has redail function";
  }
}

var bsnl = new Landline("landline", "90", true);
console.log(bsnl.redial());
