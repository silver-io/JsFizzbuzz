function FizzBuzz(){}

FizzBuzz.prototype.divisibleByThree = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.divisibleByFive = function(number) {
  return number % 5 === 0;
};

FizzBuzz.prototype.divisibleByFifteen = function(number) {
  return number % 15 === 0;
};