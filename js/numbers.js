// Js has only one type of number. - Decimal numbers and whole numbers fall under the same data type(number)

// decimal umers are also refered to as floating intergers.

console.log(3 + 5); // returns 8

console.log(120000);
console.log(12e40); // e means exponent
console.log(124e-4)

// Js will try to convert strings to Numbers during arthimetic operation arthimetic operation except addition-- Reason is because, the + operator is a string operator used for concatenation

var x = '10';
var y = '20';

console.log(x - y); // The string will get converted to numbers. This same applies to *, /, % etc.

console.log(x + y); // the strings will be concatenated

// NaN - its a reserved keyword in Js used to check if a value is a legal number

var x = 'Hello';
var y = 20;

console.log(x * y); // This will return NaN

// is NaN(): Check if a value is a legal number
let text = 'blah';
let num = 60;
let checkIfNum = isNaN(text);
console.log(checkIfNum); // return true because blah is not a legal number

let checkIfNumIsNum = isNaN(num);
console.log(checkIfNumIsNum); // false because 60 is a number

// Number mehtods();

// typeof NaN is number
console.log(typeof NaN);

// Number methods(): to string(), toFixed(), toPrecision(), number();

// toString(); converts a number to a string

let a = 20;
console.log(typeof a);

let aToString = a.toString(); // a its now a string
console.log(typeof aToString)

// toFixed(): Returns a string with a fixed number of decimals

let a2 = 8.675;

document.getElementById('heading1').innerHTML = 
a2.toFixed(0) + '<br>'
+ a2.toFixed(2) + '<br>'
+ a2.toFixed(5)

// toPrecision(): it returns a string with a specified number of length
let a3 = 9.875;
document.getElementById('heading2').innerHTML = 
a3.toPrecision(2)+ '<br>'
+ a3.toPrecision()+ '<br>' // this returns 9.875
+ a3.toPrecision(1) // this returns 10 (1e1)

// the Number() converts a value to a number
document.getElementById('heading2').innerHTML = 
Number(true) + '<br>' + // returns 1
Number(false) + '<br>' + // returns 0
Number('hello') + '<br>' + // returns NaN
Number('10') + '<br>' // returns 10