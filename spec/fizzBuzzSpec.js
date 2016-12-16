describe("FizzBuzz", function(){

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });


  describe('multiples of 3', function(){

    it("is divisible by three", function(){
      expect(is_divisible_by_3(3)).toEqual('Fizz');
    });

    it("is not divisible by three", function(){
      expect(is_divisible_by_3(4)).toEqual(4);
    });

  });

  describe('multiples of 5', function(){

    it("is divisible by five", function(){
      expect(is_divisible_by_5(5)).toEqual('Buzz');
    });

    it("is not divisible by five", function(){
      expect(is_divisible_by_5(6)).toEqual(6);
    });

  });

  describe('multiples of 15', function(){

    it("is divisible by three and five", function(){
      expect(is_divisible_by_15(15)).toEqual('FizzBuzz');
    });

    it("is not divisible by three and five", function(){
      expect(is_divisible_by_15(16)).toEqual(16);
    });

  });

  describe('divisibility', function(){

    it("should test for arbitrary divisibility", function(){
      expect(fizzbuzz.isDivisibleByNumber(3,3)).toEqual(true);
    });

    it("should test for arbitrary indivisibility", function(){
      expect(fizzbuzz.isDivisibleByNumber(4,5)).toEqual(false);
    });

  });

  describe('fizzbuzz', function(){

    it("should return fizz if divisible by 3", function(){
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    });

    it("should return buzz if divisible by 5", function(){
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    })
    it("should return fizzbuzz if divisible by 15", function(){
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    })
    it("should return 4 when passed 4", function(){
      expect(fizzbuzz.play(4)).toEqual(4);
    })
  });










});
