const fibonacci = function (num) {
  if (num <= 0) return 'OOPS';
  num = parseInt(num);
  let num1 = 0;
  let num2 = 1;
  let nextNum = num1 + num2;
  let arr = [0, 1, 1];

  while (nextNum <= 1000000) {
    num1 = num2;
    num2 = nextNum;
    nextNum = num1 + num2;
    arr.push(nextNum);
  }
  return arr[num];
};

module.exports = fibonacci;

console.log(fibonacci(3));
console.log(fibonacci(6));
console.log(fibonacci(25));

// It works --__**__--
