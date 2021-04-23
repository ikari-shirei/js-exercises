const repeatString = function (str, num) {
  if (num < 0) {
    return 'ERROR';
  }
  let strArr = [];
  for (let i = 0; i < num; i++) {
    strArr.push(str);
  }

  return strArr.join('');
};

module.exports = repeatString;

console.log(repeatString('hey', 3));
console.log(repeatString('hey', 10));
