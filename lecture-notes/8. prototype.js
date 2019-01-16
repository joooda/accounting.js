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