class Salary {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getMaaser() {
    return this.salary * 0.1;
  }
  getSalaryTax() {
    return this.salary * 0.75;
  }
}

var john = new Salary("John", 1000);
var jane = new Salary("Jane", 2000);
var mike = new Salary("Mike", 1500);

console.log(
  `${john.name}: Salary - ${john.salary}, Maaser - ${john.getMaaser().toFixed(2)}, After Tax - ${john
    .getSalaryTax()
    .toFixed(2)}`
);
console.log(
  `${jane.name}: Salary - ${jane.salary}, Maaser - ${jane.getMaaser().toFixed(2)}, After Tax - ${jane
    .getSalaryTax()
    .toFixed(2)}`
);
console.log(
  `${mike.name}: Salary - ${mike.salary}, Maaser - ${mike.getMaaser().toFixed(2)}, After Tax - ${mike
    .getSalaryTax()
    .toFixed(2)}`
);
