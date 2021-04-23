const ftoc = function (num) {
  if (num === 32) return 0;
  let result = (num - 32) * (5 / 9);
  if (Number.isInteger(result)) return parseFloat(result);
  return parseFloat(result.toFixed(1));
};

const ctof = function (num) {
  if (num === 0) return 32;
  let result = num * (9 / 5) + 32;
  if (Number.isInteger(result)) return parseFloat(result);
  return parseFloat(result.toFixed(1));
};

module.exports = {
  ftoc,
  ctof,
};

console.log(ftoc(32));
console.log(ctof(73.2));
console.log(ctof(73.2));
console.log(ctof(-10));
