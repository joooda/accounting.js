/* 
Attaching a single library object to window is a very effective technique for reducing the number of global variables in your code. But with this approach, every library in your app has a global variable. So in an extreme example, if your app uses 100 libraries, you'll create 100 global variables. We can do a lot better though. By using the power of functions, we can create a world where we have just a single global variable no matter how many libraries our app uses.

Same is done in accountingJS
*/

/* librarySystem */
(function() {
  var libraryStorage = {};

  function librarySystem(libraryName, callback) {
    if (arguments.length > 1) {
      libraryStorage[libraryName] = callback();
    } else {
      return libraryStorage[libraryName];
    }
  }
  window.librarySystem = librarySystem;

})();

/* assiging library / module to the system or window, dynamically */
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
    window.sandwichLibrary = sandwichLibrary;
  }
})();