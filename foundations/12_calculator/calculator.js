const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;

	
};

const sum = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
	
};

const multiply = function(numbers) {
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;

};

const power = function(base, exponent) {
  return base ** exponent;
	
};

const factorial = function(numero) {
  if (numero === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = 1; i <= numero; i++) {
      total *= i;
    }
    return total;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
