const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
  const initialValue = 0;
  const sumWithInitial = a.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
  );
  return sumWithInitial;
};

const multiply = function(a) {
  if (a.length > 0) {
    return a.reduce((accumulator, nextItem) => accumulator * nextItem)
  }
};

const power = function(a, b) {
  return a ** b
};


const factorial = function(a) {
	if (a === 0) {
    return 1;
  } else if (a === 1) {
    return 1;
  } else {
    return a * factorial(a - 1);
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
