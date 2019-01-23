/*

Recursion through DOM elements

*/

function logEachChildElement(element) {
  // Log the current element.
  console.log(element);
  
  // If there are child elements, then repeat these same steps for each child element.
  if (element.children.length > 0) {
    for (var i = 0; i < element.children.length; i++) {
      logEachChildElement(element.children[i]);
    }
  }     // If there are no child elements, then stop.
}

function forEachChildElement(element, callback) {
  callback(element);

  if (element.children.length > 0) {
    for (var i = 0; i < element.children.length; i++) {
      logEachChildElement(element.children[i], callback);
    }
  } 
}

// Example use case:
forEachChildElement(document.body, function(element) {
  console.log(element.nodeName);
});



/* 

Recursively mapping arrays

*/

function formatMoney(numbers) {
  
  // Recursive case
  if (Array.isArray(numbers)) {
    return numbers.map(function mapper(element) {
      return formatMoney(element);
    });
  } 
  
  // Base case
  else {
    return '$' + numbers;
  }
}
