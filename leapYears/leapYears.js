const leapYears = function (year) {
  let yesString;
  if (Number.isInteger(year / 400) && Number.isInteger(year / 100)) {
    yesString = true;
  } else if (
    Number.isInteger(year / 4) &&
    Number.isInteger(year / 100) === false
  ) {
    yesString = true;
  } else {
    yesString = false;
  }

  return yesString;
};

module.exports = leapYears;

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(1600));
console.log(leapYears(34992));
console.log(leapYears(700));
