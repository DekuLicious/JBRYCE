// const grades = [50, 100, 88, 70, 85];

// const highestGrade = Math.max(...grades);

// const lowestGrade = Math.min(...grades);

// const averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// console.log("Highest Grade: " + highestGrade);
// console.log("Lowest Grade: " + lowestGrade);
// console.log("Average Grade: " + averageGrade.toFixed(2));

// var grades = [];
// var lowGrade = 100;
// var highGrade = 0;
// var avg = 0;

// for (var index = 0; index < grades.length; index++) {
//   //look for the lowest grade
//   if (grades[index] < lowGrade) {
//     lowGrade = grades[index];
//   }
//   if (grades[index] > highGrade) {
//     highGrade = grades[index];
//   }
//   avg += grades[index];
// }
// avg /= grades.length;

// console.log("lowest grade:", lowGrade);
// console.log("highest grade:", highGrade);
// console.log("average:", avg);

var grades = [];
for (var index = 0; index < 5; index++) {
  var grade = prompt("Enter grade " + (index + 1) + ":");
  grade = parseInt(grade);
  grades.push(grade);
}

var lowGrade = 100;
var highGrade = 0;
var avg = 0;

for (var index = 0; index < grades.length; index++) {
  if (grades[index] < lowGrade) {
    lowGrade = grades[index];
  }
  if (grades[index] > highGrade) {
    highGrade = grades[index];
  }
  avg += grades[index];
}
avg /= grades.length;

console.log("Lowest grade:", lowGrade);
console.log("Highest grade:", highGrade);
console.log("Average:", avg);
