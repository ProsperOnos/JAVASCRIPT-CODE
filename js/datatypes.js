// string, Number, boolean, null, undefined, object,

// strings: String are always written in quotes (Single of double)

var name = "sandra";
console.log(typeof name);


// numbers: numbers are not placed inside of quotes

var age = 30;
console.log(typeof age);

// boolean: true or false. boolean are not written inside quotes

// var isClassGoingOn = true;
var isClassGoingOn = flase;
console.log(isClassGoingOn);

// null: in Javascript null is "nothing". it is supposed to be somthing that doesn't exist. Unfortunately, in Javascript, the data type of null is an object. You can consider it a bug in Javascript that typeof null is an object.

var blah = null;
console.log(typeof blah);


// undefined
var food = undefined;
console.log(typeof food)

// A variable that is only initialized  eveluates to undefined;
var time;
console.log(typeof time) 