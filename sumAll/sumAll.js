const sumAll = function (num1, num2) {
  //check typeof parameters if not a number throw error
  let typeOfNum1 = typeof num1;
  let typeOfNum2 = typeof num2;
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  } else if (typeOfNum1 !== 'number' || typeOfNum2 !== 'number') {
    return 'ERROR';
  }

  let higherNumber;
  let lowerNumber;
  num1 > num2 ? (higherNumber = num1) : (lowerNumber = num1);
  num2 > num1 ? (higherNumber = num2) : (lowerNumber = num2);

  let sumArray = [];

  for (let i = lowerNumber; i <= higherNumber; i++) {
    sumArray.push(i);
  }

  let result = sumArray.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return result;
};

module.exports = sumAll;

console.log(sumAll(1, 4));
console.log(sumAll(-10, 4));
console.log(sumAll(123, 1));
console.log(sumAll(1, [5, 1]));
