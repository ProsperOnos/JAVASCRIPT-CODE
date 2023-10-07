// JavaScript variables are containers for storing data values. The variables are usually declared with Keywords (var/let/const)


var y = 10 + 3;

var firstname = 'dammy';

var age = 40;

var country = "Nigeria";

console.log(y);
console.log(firstname);

// create a variable called age and store a value of 40 in it.

// output the value of the age variable to your document.

document.write(age);

// Assignment 

// create a variable called country and store a value of Nigeria in it. Output this variable into the innerHtml of h4 element

document.getElementById('heading4').innerHTML= country;


// identifiers(variables) can contain letters, digits underscores, and dollar sign. But there are rules to follow: refer to your power - point slide

var _$c7$_$_ = 'goal';

console.log(_$c7$_$_)


// variables(identifiers) are case sentitive

var CAR = 'volve';
console.log(CAR) 

// console.log(car) wrong - this identifier does not exist 

// Assigment 1; what are reserevred keywords in Javascript?


// Assignment 2; List 15 Javascript reserved keywords

// Diiferences between var, let and const

// var: var lets you re-decleare and re-assign variables
var person = 'John';
var person = 'Mary';

console.log(person); //mary will overide John

var food = 'Rice'; // declearation
food = 'Beans'; //re-assigment
console.log(food); //Beans will overide Rice

// let: will not allow you to re-decleare but will allow you to re-assign variables

let color = 'red'; // declearation

// let color = 'blue' // bad-- let will not allow you to redecclear(with var, let or const)

color = 'blue'; // good-- let will allow you to reassign

console.log(color); // blue will overide red

// const: will not allow you to redeclear and will also not allow you to re-assign variables

const friend = 'dammylola';

//const friend = 'joy'; // bad-- const will not allow you to re-declear (with var, let and const)

//friend = 'bfhff'; // bad re-assignment is not allowed (with var, let and const)

console.log(friend);

// initialization

// var and let allows you to initialize a variable 

 
var person1;
person1 = 'John doe';

console.log(person1);


let person2;
person2 = 'Mary doe';

console.log(person2);

// const will not allow you to initialize a variable

/*bad code:
const color;2
color2 = 'red';
*/

const color2 = 'red'; // good code
console.log(color2)