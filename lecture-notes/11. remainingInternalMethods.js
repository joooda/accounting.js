/* AccountingJS isArray function */
function isArray(obj) {
  return nativeIsArray ? nativeIsArray(obj) : toString.call(obj) === '[object Array]';
}

//ECMAScript 5 or later, native isArray method
Array.isArray([]);

var obj = {};

//Call method
Object.prototype.toString.call(obj);

//We're kind of borrowing toString method from objects, and using it in Arrays, to tell what kind of object it is
Object.prototype.toString.call([]); // [Array object
[].toString() //just returns the array contents



/* AccountingJS isObject function */
function isObject(obj) {
  return obj && toString.call(obj) === '[object Object]';
}

//Problem with this function:
isObject(null); //returns null


//Better
function isObject(obj) {
  return Boolean(obj && toString.call(obj) === '[object Object]');
}




/* Extends an object with a defaults object */
//function defaults(object, defs)
//assigns the default options to nonassigned properties of the object
object = object || {} //if object null, sets to empty object. Just a failsafe.

//hasOwnProperty distinguishes our created properties from it's prototypes properties
defs.hasOwnProperty(key) 

var dog = {
  bark: function() {console.log('bark');}
};
var myDog = Object.create(dog);
myDog.name = 'Henri';

//This actually logs both name and bark, while we probably only want to print just the own properties, not the prototypes
for (property in myDog) {
  console.log(property);
}

//This will do it
for (property in myDog) {
  if (myDog.hasOwnProperty(property)) {
    console.log(property);
  }
}

//This is not good
if (object[key] == null) object[key] = defs[key];
// == tries to transform right and left side to same type
// also if assigned null value, replaces with default, which might not be wanted

// better:
if (object[key] === undefined) object[key] = defs[key];



/* Check precision */
function checkPrecision(val, base) {
  val = Math.round(Math.abs(val));
  return isNaN(val)? base : val;
}

