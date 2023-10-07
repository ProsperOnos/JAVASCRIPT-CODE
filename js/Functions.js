// function definition, types of functions, Function parameter & Arugments, return keyword

// function: are used to store code until the function is invoked


// Types of Js Functions

/*
Function as a function statement --- regular functions
Function as a function expression
Function as an arrow function
*/


// Function as a function statement 

/*

synthax:

function functionName(){
    code to be executed;
}

functionName();

*/

function myFunction(){
    console.log('This is my first Js function');
};

myFunction();

// Function as a function expression: This does not use a function name. A variable is used to identify the function

/*
syntax:

let functionName = function(){
    code to be executed
};

functionName();

*/

let myFunction2 = function(){
    console.log('My second Js Function');
};

myFunction2();

// Function as a function expression: This does not use a function name. A variable is used to identify the function

/*
syntax:

let functionName = ()=>{
    code to be executed;
};

functionName();

*/

let myFunction3 = ()=>{
    console.log('This is my third Js Function');
};

myFunction3();


/*Function Parameters and Arguments. Parameters are passed into functions when the function is created. Arguments are passed into the function when it is executed to replace the function parameters*/

function myFunction4(person){
    console.log('hello' + ' ' + person);
}

myFunction4('John');
myFunction4('Peter');


let myFunction5 = function(name, age){
    console.log(`my name is ${name} and I am ${age} years old`);
}

myFunction5('Mary', 30);

let myFunction6 = (a, b, c)=>{
    console.log(a + b + c);
}

myFunction6(2, 7, 1);


// The return keyword: The code a function returns its stored in the function

// function statement
function myFunction7(person){
    return 'Hello' + ' ' + person;
}

let result = myFunction7('Andrew');
console.log(result);

// function expressiom
let myFunction8 = function (){
    return 2 + 5;
}

let result2 = myFunction8();
console.log(result2);

// arrow functions: with arrow functions, the return statement is implict -- you don't need to explicitly use thr return keyword

/*

let myFunction9 = (name)=>{
    return `Whatsup ${name}`
};

let result = myFunction ('Nero');
console.log(result3);

*/

let myFunction9 = (name) => `whatsup ${name}`;

let result3 = myFunction9('Nero_Marine');
console.log(result3);

// Write into the innerHTML  of three paragraphs the dtring 'I am happy to be learning Javavscript'.

// use the three type of functions you have learnt. One paragraph element per function typre.


// Function statement class work 
function prosperfunction(){
    document.getElementById('function_statement').innerHTML = 'I am happy to be learning Javavscript';
}

prosperfunction();

// function expression
let tegafunction = function() {
    document.getElementById('function_expression').innerHTML = 'I am happy to be learning Javavscript';
}

tegafunction();

// arrow function 
let keithfunction = ()=> {
    document.getElementById('arrow_function').innerHTML = 'I am happy to be learning Javavscript';
}

keithfunction();