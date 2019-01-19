/* Issue with original toFixed method, it doesn't still work when rounding e.g. 1.005 */
var toFixed = lib.toFixed = function(value, precision) {
  precision = checkPrecision(precision, lib.settings.number.precision);
  var power = Math.pow(10, precision);

  // Multiply up by precision, round accurately, then divide and use native toFixed():
  return (Math.round(lib.unformat(value) * power) / power).toFixed(precision);
};

/* solution: use scientific notation for the rounding process */
var betterToFixed = function(value, precision) {
  precision = checkPrecision(precision, lib.settings.number.precision);
  var exponentialForm = Number(value + 'e' + precision);
  var rounded = Math.round(exponentialForm);
  var finalResult = Number(rounded + 'e-' + precision);

  return finalResult.toFixed(precision);
};