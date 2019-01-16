/*
If using the window method from lecture 6, there is a possibility that something already exists in the window for the library keyword.

To solve this issue, use .noConflict() meethodd, which restores the original value for the library keyword, and returns the library to be assigend somewhere else.

Used in many libraries, including jQuery, underscore, accountingJS

In accountingJS, implementation a bit different - it's returning a function from a IIFE, which gets the root.accounting initially. Also deletes the noConflict method, so it's not run multiple times.

*/

window.sandwichLibrary = 'Just a library of sandwiches';

(function() {
  var fillings = {
    turkey: 'for boring sandwiches',
    cheese: 'for the vegetarians'
  };

  var breads = {
    wheat: 'the healthy option',
    white: 'the unhealthy option'
  };

  var sandwichLibrary = {
    breads: breads,
    fillings: fillings
  };

  if (typeof librarySystem !== 'undefined') {
    //Handle librarySystem case
    librarySystem('sandwichLibrary', function() {
      return sandwichLibrary;
    });
  } else {
    //Handle window case

    var previousSandwichLibrary = window.sandwichLibrary;

    sandwichLibrary.noConflict = function() {
      window.sandwichLibrary = previousSandwichLibrary;
      return sandwichLibrary; 
    };

    window.sandwichLibrary = sandwichLibrary;
  }
})();

//This will reset window.sandwichLibrary to the original value.
//.noConflict will also return the sandwichLibrary object.
var sandwichJS = sandwichLibrary.noConflict();

//You want to print window.sandwichLibrary (you want the string)
console.log(sandwichLibrary);

//We can still use SandwichJS
console.log(sandwichJS.breads.white);