// A call back fn is simply a function passed into a method or another function

// Array Iterators are also known as higher order functions in Js.

// Array.foreach(), Array.map(), Array. filter(), Array. reduce, Array reduceRight(), Array.some(), Array.every(), Array.find()

// Array.forEach(): This performs a function(callbackfn) once for every item(value) in the array. It takes in up to 3 parameters - value, inbox and array

const people = ['John', 'Peter', 'Jame', 'Joy'];

// using function as a statement

people.forEach(myFunc);

function myFunc(value, index, array){
    console.log( value);
}

// function expression:

const people2 = ['John2', 'Peter2', 'Jane2', 'Joy2'];

people2.forEach(function(value, index, array){
    console.log(value);
})

// arrow function
const people3 = ['John3', 'Peter3', 'Jane3', 'Joy3'];

people3.forEach((value, index, array)=>{
    console.log(value);
});

// Assignment
const car = ['jeep', 'volvo', 'benz'];

// using forEach loop through the items in this array a place their values in the innerHTML of a <p></p> element 

// DO this for function as a statement, expression and as an arrow function

let text = '';


function prosper(value){
    text += value + '<br>';
}

document.getElementById('parah1').innerHTML = text


let text2 = '';
const car2 = ['jeep2', 'volvo2', 'benz2'];
car2.forEach(function(value2){
    text2 += value2 + '<br>';
})

document.getElementById('parah2').innerHTML = text2;

let text3 = '';
const car3 = ['jeep3', 'volvo3', 'benz3'];
car3.forEach((value3)=>{
    text3 += value3 + '<br>';
})

document.getElementById('parah3').innerHTML = text3;

// Array.map(): This returns a new array by performing a call back function one time on each item in the original array.The callbkfn can take up three parameters -- value, index and array

const num = [6, 7, 2, 4, 6, 5];

let numTimes2 = num.map(myFunc2);

function myFunc2(value, index, array){
    return value * 2
}

console.log(num);
console.log(numTimes2);

// use arrow function to do the above example again

const num2 = [6, 7, 2, 4, 6, 5];

let spacebr = ' '
let num2Plus2 = num2.map((value)=>{
    return value + 2 + spacebr
})

document.getElementById('parah4').innerHTML = num2Plus2
console.log(num2)
console.log(num2Plus2)

// array.filter(): Calls a callbackfn that returns a new array with the items/values in the original array that passes a test. The callbackfn can take up three parameters -- value, index and array

let numbers1 = [3, 6, 8, 9, 20, 40, 32];
const number1Filter = numbers1.filter((value)=>{
    return value > 10
})
console.log(number1Filter);

// array.reduce(): Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result. it takes up to four parameters -- total, value, index, array. The reduce() method works from left to right

const numbers2 = [2, 3, 4, 1, 3];
const numbers2Reduce = numbers2.reduce((total, value)=>{
    return total + value
    // this works from left to right i.e (2+3+4+1+3)
});

console.log(numbers2Reduce)

// array.reduceRight(): Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result. It takes up to four parameters -- total, value, index, array. The reduce() method works from right to left

const numbers3 = [2, 3, 4, 1, 3];

const numbers3reduceRight = numbers3.reduceRight((total, value, index, array)=>{
    return total - value
    // this works from right to left i.e (3-1-4-3-2)
});

console.log(numbers3reduceRight);

// Assignment; explain Array.some(), Array.every() and Array.find() with definition and examples (please use the function statement, expression and arrow function for each array iterator)

// solution

// Array.some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const age = [3, 10, 12, 18, 20];

// function as a function statement
let Age1 = age.some(myAge);
function myAge(value, index, array){
    return value > 10; 
}
 console.log(Age1); // returns true cause there are values greater than 10 in the array

//  function as a function expression
let Age2 = age.some(
    function(value, index, array){
        return value < 3;
    }
);

console.log(Age2); // returns false cause none of the values are not less than three in the array

// arrow function
let Age3 = age.some((value, index, array)=>{
        return value > 19
    }
);

console.log(Age3); // returns true because there are values greater than ninteen in the array






// Array.every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const fig = [20, 10, 24, 14, 9];

// function as a function statement
let fig1 = fig.every(myFig);
function myFig(value, index, array){
    return value > 8
};

console.log(fig1); // this will return true as all values in array are greater than eight (8)

// function as a function expression
let fig2 = fig.every(
    function(value, index, array){
        return value < 13
    }
);

console.log(fig2); // this will return false cause all values except ten (10) is greater than thirteen (13)

// arrow function
let fig3 = fig.every(
    (value, index, array)=>{
        return value < 25
    }
);

console.log(fig3); // this will return true because all values in the array are less than twenty five (25)





// Array.find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const nura = [ 10, 13, 15, 18, 24, 30, 34];

// function as a function statement
let nura1 = nura.find(myNura);

function myNura(value, index, array){
    return value > 20
};

console.log(nura1); // this will return the value of the next figure as the statment is given

// function as a function expression
let nura2 = nura.find(
    function(value, index, array){
        return value < 16
    }
);

console.log(nura2); // this returns the next value lower than fifteen (15)

// arrow function
let nura3 = nura.find(
    (value, index, array)=>{
        return value > 10
    }
);
console.log(nura3) // this returns the next value greater than eighteen (10)