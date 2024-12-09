function Factorial(num) {
  if (num == 0) {
    return 1;
  }
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(Factorial(10));
