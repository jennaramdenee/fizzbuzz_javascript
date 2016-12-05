function is_divisible_by_3(number){
  if (number % 3 === 0) {
    return 'Fizz';
  }
  else {
    return number;
  }
}

function is_divisible_by_5(number){
  if (number % 5 === 0) {
    return 'Buzz';
  }
  else {
    return number;
  }
}

function is_divisible_by_15(number){
  if (number % 15 === 0) {
    return 'FizzBuzz';
  }
  else {
    return number;
  }
}

function FizzBuzz(){

}

FizzBuzz.prototype.isDivisibleByNumber = function(number,divisor){
  if (number % divisor === 0) {
    return true;
  }
  else {
    return false;
  }
}

FizzBuzz.prototype.play = function(number){
  if (this.isDivisibleByNumber(number, 3) === true) {
    return "Fizz";
  }
  else if (this.is_divisible_by_number(number, 5) === true) {
    return "Buzz";
  }
  else if (this.is_divisible_by_number(number, 15) === true) {
    return "FizzBuzz";
  }
  else {
    return number;
  }
}
