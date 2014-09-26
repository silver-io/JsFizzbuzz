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
  });//close describe

  describe('it is not divisible by', function() {

    it('is not divisible by three', function(){
      expect(fizzBuzz.divisibleByThree(4)).toBe(false);
    });

    it('is not divisible by five', function(){
      expect(fizzBuzz.divisibleByFive(6)).toBe(false);
    });

    it('is not divisible by fifteen', function(){
      expect(fizzBuzz.divisibleByFifteen(2)).toBe(false);

    });
  });//close describe

  describe('when we play the game', function(){

    it('says "fizz" if the number is divisible by three', function(){
      expect(fizzBuzz.says(3)).toEqual("Fizz");
    });

    it('says "buzz" if the number is divisible by five', function(){
      expect(fizzBuzz.says(5)).toEqual("Buzz");

    });

    it('says "FizzBuzz if the number is divisible by fifteen', function(){
      expect(fizzBuzz.says(15)).toEqual("FizzBuzz");

    });

    it('prints the number given if not divisible by three five or fifteen', function(){
      expect(fizzBuzz.says(1)).toEqual(1);

    });

  });//close describe

});