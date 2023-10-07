// Loops are used to run a set of codes over again each time with a different value while a condition stays true. The loop terminantes once the condition eveluates to false.


// for loop, forin loop, for of loop, while loop and do while loop

// for loop:

/*

for(initialization; condition; increament/decreament{
    // code to execute
})

statement i will run once without checking the condition

if statement 2(condition) is omitted, the loop will never end
*/

for(let i = 1; i <= 10; i++){
    console.log(i);
}

let i2 = 10;
for(i2; i2 > 5; i2--){
    console.log(i2)
}

// Assignment: use a for loop to log to your console 6 to 30;
let assign = 6;
for(assign; assign<= 30; assign++){
    console.log(assign)
}

// for loop is best for loop through arrays, nodelist and Html collections

// Looping through arrays with the for loop

const users = ['felicia', 'peter', 'jane', 'John','andrew'];

for(let x = 0; x < users.length; x++){
    console.log(users[x]);
} 

const cars = ['volvo', 'venza', 'jeep', ' benz'];

let x2 = 0; len = cars.length; text = ''
for(x2; x2 < len; x2++){
    text += cars[x2] + '<br>'
    // text = text + cars[x2] + '<br>'
}

document.getElementById('heading1').innerHTML = text;

// classwork
const fruits = ['bannana', 'apple', 'mango']
// loop through the first array and display all items in the h2 element with the id of "heading2"

let o1 = 0; flen = fruits.length; doc = '';
for(o1; o1 < flen; o1++){
    doc += fruits[o1] + '<br>'
};

document.getElementById('heading2').innerHTML= doc;

// For in loop: Best for looping through Objects.

// This can also be used to loop through an array if the index of the array items are not a priority to you

/*
syntax:

    for(key in Object){
        // code
    }

    This iterates through all of the keys/properties in the object and returns their value(s)
*/

const person = {
    name: 'John Doe',
    age: 30,
    country: 'Nigeria',
};

// console.log(Object.keys(person));

for(y in person){
    console.log(person[y])
};

// example 2
const person2 = {
    name: 'Mary Jane',
    age: 20,
    country: 'canada'
};

/*
for(z in person){
    console.log(person2[z]);
}
*/

let text3 = ''
for(y2 in person2){
    text3 += person2[y2] + '<br>'
}
document.getElementById('heading3').innerHTML=text3;

// for of loop is good for loop through arrays, string, nodelists, html-collections

/*
for(k of array){
    // code
}

*/

const colors = ['red', 'blue', 'orange', 'pink'];

for(z of colors){
    console.log(z);
};

const parah = 'good morning';
for(z2 of parah){
    console.log(z2);
};

// while: works just like for loop

/*

while(condition){
    // code
    i++ // if this line is omitted the loop will never end
}

*/

let text4 = '';
let p = 1;
while(p < 10){
   text4 += p + ', '
   p++ 
}

document.getElementById('heading4').innerHTML = text4


// the do while loop runs once even if the condition is false--- we won't be uisng this