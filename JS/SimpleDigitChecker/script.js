var userNumber = prompt("Please enter a number");
var digits = 0;
var temp = userNumber;

while (temp > 0) {
  digits++;
  temp = parseInt(temp / 10);
}
console.log("User number: ", userNumber, " has ", digits, " digits");
