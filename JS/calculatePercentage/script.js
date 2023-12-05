function calculatePercentage() {
  var income = document.getElementById("income").value;
  var maaser = income * 0.1;
  var hommash = income * 0.2;

  var result = document.getElementById("result");
  result.innerText = "Maaser: " + maaser + "\nHommash: " + hommash;
}
