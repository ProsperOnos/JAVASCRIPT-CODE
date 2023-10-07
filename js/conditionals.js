// conditionals statements in Javascript are used to execute codes based on certain specified conditions

// if statement: This statement is used to execute a code when specified condition if true

// else if statement: This is used to specify another condition different from the codition in the "if" statement

// else statement: This runs when the "if" and/or "else if" statement fails(evaluates to false)

// syntax

/*
if(condition){
    // code to execute
} else if(conditions){
    // code to execute
}

*/

let x = 30;

if (x > 30){
    console.log('x is greater than 30');
}
else if(x === 30){
    console.log('x is equal to 30');
}
else{
    console.log('x is smaller than 30')
}

// break keyword: is used to break out of a Js code statement

for(let i = 0; i < 10; i++){
    if(i === 3){
        break;
    };
    console.log(i);
};

// swicth statement: Evaluates an expression once, matching the value of the expresstion against series of cases and executing statements/code

// syntax:

/* 

switch(expression){
    case a:
        // code
        break;

    case b:
        // code
        break;

    case c:
        // code
        break;
    default:
        // code
}

*/

let num = 0; // this is our expression in this example
let msg;

switch(num){
    case 0:
        msg = 'Number is zero';
        break;

    case 5:
         msg = 'Number is five';           
         break;
    case 10:
        msg = 'Number is ten'
        break;
    default:
        msg = 'There is no matching value';
        break;
}

console.log(msg);

let color = 'red'; // this is our expression
let msg2;
switch(color){
    case 'blue':
        msg2 = 'This color is blue';
        break;
    case 'white':
        msg2 = 'This color is white';
        break;
    case 'red':
        msg2 = 'This color is red';
        break;
    default:
        msg2 = 'There is no match'
}

console.log(msg2)

// Ternary operator : short-hand for if and else statement
let constraint = 18;
let age = 10;
let canDrink;

if(age > constraint){
    canDrink = 'You are old enough to Drink';
} else{
    canDrink = 'You are not old enough to Drink';
};

console.log(canDrink);

// Using Ternary Operator to do the above

// syntax:

/* 
variable = (condition) ? 'code' : 'code';
*/

let constraint2 = 18;
let age2 = 10;
let canVote;

canVote = (age2 > constraint2) ? 'You can drink' : 'You cannot drink';
console.log(canVote);