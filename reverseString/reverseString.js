const reverseString = function (str) {
  let strArr = str.split('');
  return strArr.reverse().join('');
};

module.exports = reverseString;

console.log(reverseString('hello there'));
