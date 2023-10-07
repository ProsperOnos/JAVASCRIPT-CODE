// JavaScript strings are used for storing and manipulating text. A JavaScript string is zero or more characters written inside quotes


// escape charcter (\): insert before the opening and cllosing to qquote

var text = 'Hello i am a "viking" from the North';
console.log(text)

var text = 'Hello I am s \'viking\' from the North';
console.log(text)

// lenght

var text = 'I am';
console.log(text[0]); // returns I, note strings are not arrays
console.log(text.length) // the space is also counted as a character

// string methods(); index(), lastIndexOf(), slice(), toUpperCase(), toLowerCase(), trim(), replace()

var text2 = 'I am a viking from the south viking';

// indexOf(): returns the index of the first occurance of a string
console.log(text2.lastIndexOf('viking'));

// lastIndexOf(): return the index of the last occurance of a string
console.log(text2.lastIndexOf('viking'));

// slice: It cuts out part of a string
var text3 = 'I am a muslim from the east';
var sliceText3 = text3.slice(5); // slice from "a" till the end
console.log(sliceText3);
var sliceText3Again = text3.slice(5, 10)
console.log(sliceText3Again); // slice from a(index 5) and stops at s(index 9)

var text4 = 'hello';
console.log(text4.toUpperCase());

var text5 = 'I AM BIG';
console.log(text5.toLowerCase());

// trim method removes excess white spaces before and after a string
var password = 'abc123';
var confirmPassword = '      abc123' // this string has spaces before it
console.log(password);
console.log(confirmPassword.trim()); // trims off the excess spaces

// the replace(): This is used to relate a string. This method returns a new string

var text6 = 'I love coding everyday coding'
var newText6 = text6.replace('coding', 'programming') // the first argument is case sensitve;

console.log(newText6); // this will only replace the first occurance of coding


// relace coding globaly
var newText6Global = text6.replace(/coding/g, 'programming');
console.log(newText6Global);
