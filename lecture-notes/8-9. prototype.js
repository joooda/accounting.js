/*
Prototype = "the original or model on which something is based or formed"

Usage:
- Object.create(dog): creates a new object based on a prototype 'dog'
- Object.getPrototypeOf(myDog)
*/

var dog = {
  fetch: function () {
    console.log('fetch');
  }
};

var myDog = Object.create(dog);
myDog.name = 'Alexis';

var randomDog = Object.create(dog);
randomDog.name = 'Hey';

//Both myDog and randomDog can now access the fetch method, as it's in the prototype
Object.getPrototypeOf(myDog) === dog;
randomDog.fetch();

//Default object prototype - for all objects, prototype automatically set to default object prototype
var defaultObjectPrototype = Object.getPrototypeOf(dog);
//Prototype of default object prototype is null
Object.getPrototypeOf(defaultObjectPrototype) === null;

//Object without any prototype
var noPrototype = Object.create(null);
Object.getPrototypeOf(noPrototype) === null;

//All normal objects have a prototype with certain functions (e.g. toString, valueOf, constructor...)
var normalObject = {};
Object.getPrototypeOf(normalObject) !== null; 
normalObject.toString();



/* Lesson 9 - Prototypes and constructors
 
With constructors, we don't need to manually define the prototype object
  
{} = "Object" is actually a constructor function.
That's why every created object gets the prototype Object.prototype.

- Capitalize constructores
- Don't forget 'new
- Using prototypes makes it easier to distinguish between unique vs shared properties
- Array.prototype.forEach()
- __proto__

*/

//Constructor functions with capital letter
function Dog(name) {
  //this is set to an empty object, {}
  this.name = name;
  this.fetch = function() {
    console.log('fetch');
  }
  //this is returned
}

//New keyword - distinguishes constructor functions from normal functions
var testDog = new Dog('testDoggy');

//Returns an object with a constructor Dog(name)
Object.getPrototypeOf(testDog);

//This is the same, gets created automatically for all - new Dog objects get this as prototype
Dog.prototype;
Object.getPrototypeOf(testDog) === Dog.prototype;

//Prototyp of Dog.prototype = default object prototype
Object.getPrototypeOf(Dog.prototype);


//There is redundancy - the fetch method is univeral to all Dog objects, but it's still defined for each separately. This can be fixed by assigning fetch to the prototype.
function Dog(name) {
  this.name = name;
}
Dog.prototype.fetch = function() {
 console.log('fetch inside prototype');
}

var testDog2 = new Dog('doggo');
testDog2.fetch();
Object.getPrototypeOf(testDog2);
Dog.prototype;
Dog.prototype.fetch();

//But.. I guess if I wanted to do a fetch(name) function, this proto method wouldn't work

//Object is a constructor function and has Object.prototype, which is given to all objects
var obj = new Object();
obj.getPrototypeOf(obj) === Object.prototype;


//Normal array doesn't have forEach on it
var arr = [];
//But the array prototype does
Object.getPrototypeOf(arr); 

//The __proto__ property holds the prototype (can be seen in dev tools)
arr.__proto__;