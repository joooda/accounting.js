/*
A long list of arguments to a function is rarely that good.
- Impossible to remember the order
- Adds extra complexity

Better to just accept single object for customization instead of catering all.

*/

var formatMoney = lib.formatMoney = function(number, symbol, precision, thousand, decimal, format) {

  if (isArray(number)) {
    return map(number, function(val){
      return formatMoney(val, symbol, precision, thousand, decimal, format);
    });
  }


  number = unformat(number);


  var opts = defaults(
      (isObject(symbol) ? symbol : {
        symbol : symbol,
        precision : precision,
        thousand : thousand,
        decimal : decimal,
        format : format
      }),
      lib.settings.currency
    ),

   
    formats = checkCurrencyFormat(opts.format),

    // Complicated, useFormat not initialized with var?
    useFormat = number > 0 ? formats.pos : number < 0 ? formats.neg : formats.zero;

  // Complicated
  return useFormat.replace('%s', opts.symbol).replace('%v', formatNumber(Math.abs(number), checkPrecision(opts.precision), opts.thousand, opts.decimal));

  //Nicer:
  var formattedNumber = formatNumber(Math.abs(number), checkPrecision(opts.precision), opts.thousand, opts.decimal);
  var finalResult = useFormat
      .replace('%s', opts.symbol)
      .replace('%v', formattedNumber)

  return finalResult;

};