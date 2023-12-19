class Dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " barks.");
  }
  walk() {
    console.log(this.name + " walks.");
  }
}

class Labrador extends Dog {
  bark() {
    console.log(this.name + " barks loudly.");
  }
}

var jasper = new Dog("Jasper");

jasper.speak();
jasper.walk();

var sohko = new Labrador("Sohko");
sohko.bark();

class MathUtilities {
  static calculateVAT(price) {
    return price * 1.2;
  }
}

console.log(MathUtilities.calculateVAT(100.0).toFixed(2));
