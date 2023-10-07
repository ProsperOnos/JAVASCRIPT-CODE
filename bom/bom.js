// BOMM - BROWSER OBJECT MODEL.
// BOM lets javascript communicate with the browser.


// global Object for the browser: window Object.

// const h1 = document.querySelector('#heading1'); // The presence of the window object is implied on the browser

const h1 = window.document.querySelector('#heading1');

document.querySelector('#heading1');
console.log(h1);


// window.innerWidth, window.innerHeight, window.screen.Height, window.screen.width, window.screen.availHeight, window.screen.availwidth

// window.inneeWidth: returns the width of the browser

// var browserWidth = window.innerWidth
var browserWidth = innerWidth;
console.log(browserWidth);


// window.innerWidth: returns the height of the browser

// var browserHeight = window.innerHeight;
var browserHeight = innerHeight;
console.log(browserHeight);


// window.screen.width: This retuns the width of your screen

// var screenWidth = window.screen.width;
var screenWidth = screen.width;
console.log(screenWidth);

// window.screen.height: This returns the height of your screen

// var screenHeight = window.screen.height;
var screenHeight = screen.height;
console.log(screenHeight);

// window.screen.availWidth: THis returns the width op tyour screen minus your taskbar

// var screenavailWidth = window.screen.availwidth;
var screenavailWidth = screen.availWidth;
console.log(screenavailWidth);

// window.screen.availHeigth: THis returns the height op tyour screen minus your taskbar

// var screenavailHeight = window.screen.availHeight;
var screenavailHeight = window.screen.availHeight;
console.log(screenavailHeight);


/////// location: get web address, redirect(), reload()

// const webAddress = window.location.href;
var webAddress = location.href;
console.log(webAddress);

// redirect()
var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', ()=>{
    window.location.assign('./new.html'); // this redirectd you to new.html
});

// reload()
var btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', ()=>{
    window.location.reload(); // this reloads the page
});


// history: window.history.back(), window.history.forward();

var btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', ()=>{
    window.history.back() // this takes the browser a page backwards 
});

var btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', ()=>{
    window.history.forward(); // this takes the browser a page forward
});


// TIMMING: setTimeout(), setInterval(), clearTimeOut(), clearInterval;

// setTimeout(); It runs a function once after a specified time. It takes in two arguments: the time in miliseconds and the function; ===> setTimeout(function, time(ms))

function myFunc(){
    console.log('hello after 2sec')
}

var timeout1 = setTimeout(myFunc, 2000)

// using arrow func
var timeout2 = setTimeout (()=>{
    console.log('hello after 3secs')
}, 3000)

// setInterval(): it runs a function repeatedly with respect to a specified time. It takes in two arguments: the time in milliseconds and the function; ===> setInterval(function, time(ms))


var interval1 = setInterval(()=>{
    console.log('in the interval');
}, 3000);

// clearTimeout() and clearInterval()
var btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', ()=>{
    clearTimeout(timeout1)
    clearTimeout(timeout2)
});

var btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', ()=>{
    clearInterval(interval1)
})

/*
var func = ()=>{
    var date = new Date()
    document.querySelector('#h2').innerHTML = date.toLocaleTimeString();
}

setInterval(func, 1000)
*/

setInterval(()=>{
    var date = new Date()
    document.querySelector('#h2').innerHTML = date.toLocaleTimeString();
}, 1000)


// pop up boxes/alerts

// alert(): displays the alert box containing a message with "ok";

window.alert('we will take your data');
// alert('we will take your data');

// confirm(): displays a box containing messgages with "ok" and "cancel"

function confirmDelete(){
    const confirmAction = confirm('Are you sure you want to delete this item');

    if(confirmAction === true){
        console.log('item deleted successfully');
    }
    else{
        console.log('action cancelled')
    }
}

// Assignment: reseache on prompt box and document your research in your practice folder with examples

// prompt()

// Description
// The prompt() method displays a dialog box that prompts the user for input.

// The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.

// Note
// A prompt box is used if you want the user to input a value.

// When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed.

// Do not overuse this method. It prevents the user from accessing other parts of the page until the box is closed.

// Example

const prompt1 = document.querySelector('.prompt1'); 
prompt1.addEventListener('click', ()=>{
    let Example = prompt("Please enter your name", "Harry Potter");
    if(Example !=null){
        document.getElementById("exam").innerHTML = "Hello " + Example + "! How are you today?";
    }
})
