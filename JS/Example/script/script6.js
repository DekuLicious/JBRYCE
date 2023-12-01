function displayDivisibleNumbers(upperLimit, divisor) {
  for (let i = 1; i <= upperLimit; i++) {
    if (i % divisor == 0) {
      console.log(i);
    }
  }
}

displayDivisibleNumbers(20, 5);
