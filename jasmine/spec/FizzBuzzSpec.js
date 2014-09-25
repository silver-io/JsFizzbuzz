describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('it is divisible by', function() {

    it('is divisible by three', function() {
      expect(fizzBuzz.divisibleByThree(3)).toBe(true);
    });

    it('is divisible by five', function() {
      expect(fizzBuzz.divisibleByFive(5)).toBe(true);
    });

    it('is divisible by fifteen', function() {
      expect(fizzBuzz.divisibleByFifteen(15)).toBe(true);
    });

  });


});