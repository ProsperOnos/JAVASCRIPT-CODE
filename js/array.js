// Array: is a special variable that stores multiple values and these values can come in different data types      

// Java 

var cars = ['vovlo', 'lexus', 'camry', 'jeep'];

console.log(cars); // car array

// accessing array items: array item are accessed with their index. syntax: Arrayname[index_of_item]

let firstItem = cars[0]; // picking the first car
console.log(firstItem);

let secondItem = cars[1];
console.log(secondItem);

// classwork: log the last item in the array to your console

let forthItem = cars[3];
console.log(forthItem);

// changing array items

var randomArray = ['John', 40, 'Beans'];

console.log(randomArray); // original array

// modify item 1
let itemOne = randomArray[0] = 'Peter'; //Item one modified
console.log(itemOne);

console.log(randomArray);

// modify item 2
let itemTwo = randomArray[1] = 60; // Item two modified
console.log(itemTwo);
console.log(randomArray);

// modify item 3; class work: change beans to rice
let itemThree = randomArray[2] = 'rice'; // Item three modified
console.log(itemThree);
console.log(randomArray)

// the length property of an array returns you the total actual number of items or values in that array

let colors = ['reds', 'green', 'blue', 'black', 'Gold', 'Grey'];

let lenofArray = colors.length
console.log(lenofArray)


// the length property can also be used to get the last item in an array

let lastItem = colors[colors.length - 1];
console.log(lastItem);

// How to know if a variable is an array: Array.isArray(), Array instance of Array
let fruits = ['mango', 'pear', 'orange'];
console.log(Array.isArray(fruits)); // true
console.log(fruits instanceof Array); // true

// Array methods: toString(), pop(), push(), shift(), unshift(), slice(), splice(), concat(), and sort();

// toString(): Converts an array to string
let fruits1 = ['mango', 'pear', 'orange'];
let toString = fruits1.toString(fruits1);// this is now a string

console.log(Array.isArray(fruits1)); // true
console.log(Array.isArray(toString)); // false
console.log(typeof toString); // string
console.log(fruits1); // this is an array
console.log(toString); // this is a string(text)

// pop(): Remove the last item in an array
let colors1 = ['red', 'green', 'blue', 'black', 'gold'];
let rmvlastItem = colors1.pop(); // gold has been popped out
console.log(rmvlastItem); // this returns the popped item (gold)
console.log(colors1); // gold is no more in the colors1 array.

// push(): This adds a new item at the end of an array.
let colors2 = ['red', 'green', 'blue', 'black', 'yellow'];
let addToEnd = colors2.push('silver');
console.log(colors2); // silver has been added to colors2 array
console.log(addToEnd); // this will return the length of the array and not the item that was pushed

// shift(): This method removes the first item in an array
let fruits2 = ['mango', 'pear', 'orange', 'pinapple'];
let rmvFirstItem = fruits2.shift();
console.log(fruits2); // mango has been moved

// unshift(): This method adds a new item at the beginning of the array
let fruits3 = ['mango', 'pear', 'orange', 'pinapple'];
let addToStart = fruits3.unshift('berry');
console.log(addToStart); // this returns the length of the array
console.log(fruits3); // berry has been added

// splice(): Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. The splice method can take in two arguments. the first arugment specifies the postion the new item will sit. And the second argument specifies the number of items that will be removed after the newly added item

let cars1 = ['volvo', 'lexus', 'camry', 'jeep'];
console.log(cars1)
let removedItems = cars1.splice(0,2, 'toyota'); // this inserts toyota at position zero (beginning of the array) and removes volvo and lexus (2 items)  

console.log(removedItems); // this returns the reward items
console.log(cars1);

let fruits4 = ['mango', 'pear', 'orange', 'pinapple'];
// fruits4.splice(2,1 'slkbhsd', 'asfgcvh');

fruits4.splice(2,1); // this removes orange from the array 
console.log(fruits4);

// slice(): This slices a part of an array/ This method can take up to two aruguments. This method does not change the original array, it insteads returns a new array of the sliced items.

let cars2 = ['volvo', 'lexus', 'camry', 'jeep', 'venza'];
let slicedItems = cars2.slice(2); // this will slice the array from index 2 till the very end
console.log(cars2); //this gives our complete cars2 array 

console.log(slicedItems); // this returns the sliced array

// this slice method with two arguments specifies the start and end position (usually not include) of the slice array
let cars3 = ['vovle', 'lexus', 'camry', 'jeep', 'venza'];
let slicedItem2 = cars3.slice(1,3); // starts from lexus (index 1) and ends at camry (beacause position 3 is not included) 
console.log (slicedItem2);

// concat(): adds two or more arrays

let array1 = ['red', 'white', 'black', 'orange',]
let array2 = [46, 67, 83, 90, 45];
let array3 = ['mango', 'pear'];
let combinedArray = array1.concat(array2, array3);
console.log(combinedArray);

// sort (): sorting string;
let randArr1 = ['dog', 'apple', 'cat', 'bed', 'bird'];
console.log(randArr1);
let sortedArr1Ascending = randArr1.sort(); // ascending order
console.log(sortedArr1Ascending);

// pro tip: before sorting in desecnding order, you must sort in asceding order fisrt
let sortedArr1Descending = randArr1.sort().reverse();
console.log(sortedArr1Descending);

// how to correctly sort numbers in Js: The compare function is used to sort numbers correctly
/* syntax:
    function(x,y){return(x-y)} -- ascending order
    function(x,y){return(y-x)} -- descending order
*/
let randNums = [1, 67, 100, 3, 10, 4];
console.log(randNums);
let randNumsSortedAscending = randNums.sort(function(x,y){return(y-x)}); // ascending 
console.log(randNumsSortedAscending);

let randNumsSortedDescending = randNums.sort(function(x,y){return(y-x)});
console.log(randNumsSortedDescending);



// Assignment 1)
let languages = ['chinese', 'english', 'igbo', 'hausa'];
/*
use the pop() method to remove the last item in this array; use the unshift() method to add "yoruba" at the begining of the language arry
*/

// Solution 1
console.log(languages);
let Rmvlanguage = languages.pop(); 
console.log(Rmvlanguage);
console.log(languages); // hausa has been removed, array modification1
let addlanguage = languages.unshift('yoruba');
console.log(languages);


// Assignment 2)
let languages2 = ['chinese', 'enlish', 'igbo', 'hausa'];
// use the splice () method to remove the last item from the array;
// use the splice () method to add 'spanish' and 'german' at the end of the array;

// Solution 2
console.log(languages2);
let rmvlastlang = languages2.splice(3,1);
let addl
console.log(languages2);



// Assignment 3)
let nums = [1, 5, 7, 0, 2, 50, 80];
// sort the nums array in desceding order

// Solution 3
console.log(nums);

// now descending
let sortindescend = nums.sort(function(x,y){return(y-x)});
console.log(nums); // descending order

// Assignment 4)
let food = ['rice', 'beans', 'spagetti'];
// sort the food array in descending order
// change spagetti to indomie in the food array

// Solution 4
console.log(food);
let sortfoodinascend = food.sort();
console.log(food);

let laschngfoodItem = food.splice(2,1, 'idomie',)
console.log(food);

// Having an array f Objects
let user = [
    {name: 'John Doe', age: 30, password:'thdug3445mA'},
    {name: 'Mary Peters', age: 50, password:'urt3534'},
    {name: 'Dawg', age: 10, password:'abc123'}
]

console.log(user);
console.log(user[0]); // first user
console.log(user[2].name); // this gives us the third user name

// Assignment:

let Blogs = [
    {title: 'How to write Javascript', author:'John Nero', sinppet: 'gfg fhfh fhh'},
    {title: 'The story of blah', author:'Morgan freeman', sinppet: 'fg dsd eyer'},
    {title: 'How to write CSS and HTML', author:'Cynthia', sinppet: 'gfg fhfh fhh'},
    {title: 'Justice for all', author:'Chigozie Andrew', sinppet: 'fg dsd eyet'},
]

// Log the Blog array to your console

// Log the title of the last book to your console

// Log everything about the second book your console once

// Solutions 
console.log(Blogs) // an array of books are displayed
console.log(Blogs[3].title) // title of the book with index number three (3) is displayed 
console.log(Blogs[1]) // contents in the second book are ;loged to the console


