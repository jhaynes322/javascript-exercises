const ftoc = function (ftemp) {
  let celsius = (ftemp - 32) * 5 / 9;
  return Math.round(celsius * 10) / 10;
};

const ctof = function (ctemp) {
  let fahrenheit = ctemp * (9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
