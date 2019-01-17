/*
Lesson 10: isString, !! and String prototype

*/


//!! operator gives the corresponding boolean value of whatever comes after it, e.g. null
// ! always forces to boolean
!(null) // !(false) ==> true
!!(null) // !!(false) ==> !true ==> false

//I prefer Boolean(null) to force the boolean value, instead of this !! trick
Boolean(null) === !!(null)



//isString in accountingJS
function isString(obj) {
  return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
}

(obj === '' || (obj && obj.charCodeAt && obj.substr))
//if obj = null, this returns null, but the !! ensures you get false
//obj.charCodeAt && obj.substr are string methods, so only string should return true

var obj = 'gordon';
(obj && obj.charCodeAt && obj.substr)
//returns the LAST element in the && operators, given all are true

Boolean('') //returns false, that is why the firs obj === '' is first explicitly defined


//Strings
//How do strings have access to charCodeAt, substr etc. methods, they are primitives, not objects?
var str = 'herni';
str.substr(2);
//Well, JS creates an object version of the string in the background whenever a string method is called
//Kind of like str = new String('herni);
String.prototype.whatTypeAmI = function() {
  return typeof this;
};

typeof str //"string"
str.whatTypeAmI(); //returns "object"

//similarly in other primitives
var age = 50;
age.toFixed();

