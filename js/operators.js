// Arithmetic Operators

// addition
let a = 30;
let b = 10;

let z = a + b;

console.log(z);

// subtraction
let a2 = 30;
let b2 = 10;

let z2 = a2 - b2;

console.log(z2);

// division
let a3 = 30;
let b3 = 10;

let z3 = a3 / b3;

console.log(z3);

// multiplication
let a4 = 30;
let b4 = 10;

let z4 = a4 * b4;


console.log(z4);

// exponiation (**); it raises the first value to the power of the second value

let a5 = 2;
let b5 = 3;

console.log(a5 ** b5); // this raises 2 to the power of 3

// modulus (%); it returns the division remainder

let a6 = 9;
let b6 = 4;

console.log(a6 % b6);

// increment (++): increases a value by 1

let a7 = 5;
a7++ // this increases 5 to 6

console.log(a7);

// decrement (--): decreases a value  by 1

let a8 = 9;
a8-- // this decreases 9 to 8

console.log(a8);

//1) String Operator(+): It is used to add strings. We call this "concatenation";

let greeting = 'Good morning';
let person = 'John';

console.log(greeting + ' '+ person);

let a9 = '10';
let b9 = '8';

console.log(a9 + b9); // this will output 108 and not 18;

// aside from the (+) operator, Javascript will convert "numbers in quotes(strings)" to "numbers" example:

let a10 = '10';
let b10 = '8';

console.log(a10 - b10) // this will evaluate to two because, the string where converted to numbers

// Assignment Operator:

// = operator
let a11 = 'Orange' // orange is assigned to all

console.log(a11);

// += operator
let a12 = 20; // 20 is assigned to a12;
a12 +=5; // 5 is assigned and added to a12;

console.log(a12);

// the same applies to -=, +=, *=, /=
let a13 = 8;
a13-=3;

console.log(a13);

// COMPARISON OPERATORS: Comparison operators are used in logical statements to determine equality or difference between variables or values.

// less than (<) and greater than (>)
let a14 = 3;
let b14 = 4;

console.log(a14 > b14); // this evaluates to false
console.log(a14 < a14); // this evaluates to true

// less than or equal to (<=) and greater than (>=)
let a15 = 2;
let b15 = 3;

console.log(a15 >= b15); // this evaluates to false
console.log(a15 <= b15); // this evaluates to true

// equal to (==) and (===)

// equal to (==): this matches just the value
let a16 = '10';
let b16 = '10';

console.log(a16 == b16); // this will evaluate to true because, the value of a16 is equal to the value of b16;

//equal to (===): it matches both the value and the  type

console.log(a16 === b16); // this will evaluate to false because, the values of a16 and b16 are not equal in "type"

// not equal to (!= and !==)

let a17 = '6';
let b17 = 6;

console.log(a17 != b17); // this evaluates to false because, (!=) matches only the "value" of the variables

console.log(a17 !== b17); // this evaluates to true because, (!==) matches the "value" as well as the "data type" of the variables. 

//Logcial Opeators

// 1) AND (&&) - amplesan; All statements must be valid for it to Output true, Otherwise it outputs false

console.log(2 < 3 && 14 > 10); // this will return true because, all statments are valid

console.log(2 < 3 && 14 > 10 && 2 != 2); //This will return false because, one or movestatement(a) in invalid

// 2)  OR (||): At least one statement must be vaild for it ti output tru.

console.log(2 > 5 || 2 != 2) // this will return false beacuse, all statements are invalid

console.log(2 > 5 || 2 != 2 || 4 < 10) // this will return true beacuse, all statements are invalid


// Template stirngs || template literals: for concatentation
const greet = 'Good Morning';
const neigbour = 'Sandra';

// using the string operator (+)
console.log('Hello' +' ' + greet + ' ' + neigbour);

//using template strings
console.log(`Hello ${greet} ${neigbour}`)

const program = ' Javascript';
const myname = 'Prosper';
const action = 'is learning';

// create two paragraphs in your Html file and concatenate the above strings into the paragraphs: "Hey! Prosper is learning Javascript" using the "string operator" and "template strings" respectively i.e (one method per paragraph element)

// solution
document.getElementById('parah1').innerHTML='Hey!' + ' ' +myname + ' '+ action + ' ' + program;

document.getElementById('parah2').innerHTML= `Hey! ${myname} ${action} ${program}`;

