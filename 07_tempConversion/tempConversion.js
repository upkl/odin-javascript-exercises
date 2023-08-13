const convertToCelsius = function(degFahrenheit) {
  let degCelsius = (degFahrenheit - 32) * 5 / 9;
  return roundTo1(degCelsius);
};

const convertToFahrenheit = function(degCelsius) {
  let degFahrenheit = 32 + degCelsius * 9 / 5;
  return roundTo1(degFahrenheit);
};

const roundTo1 = function(number) {
  return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
