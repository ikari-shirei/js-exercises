function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  if (num1 >= num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

function sum(num) {
  return num.reduce((x, y) => {
    return x + y;
  }, 0);
}

function multiply(num) {
  return num.reduce((x, y) => {
    return x * y;
  });
}

function power(num1, num2) {
  return num1 ** num2;
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let arr = [];
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }
  return arr.reduce((x, y) => {
    return x * y;
  });
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

console.log(factorial(10));
