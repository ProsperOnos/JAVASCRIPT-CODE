// Three ways to add an event to ana html Element:

/*

- adding the event directly on the event attribute of an html element
-reference a javascript function using an event attribute on the html element
-using the addEventListener() method to add events to html elements fro Javascript - recommended

*/

function myFunction(){
    var inputText = document.querySelector('input[type = "text"]');
    inputText.value = 'GOOD DAY';
};


// using addEventListener(): This method takes in the argument which are: - the "event name" and the "function" the event calls

var para1 = document.querySelector('.para1');

para1.addEventListener('click', myFunction2);

function myFunction2(){
    var h1 = document.querySelector('#heading2');
    h1.style.color = 'red'
};

// using the name function with addEventlistener()
var h2 = document.querySelector('#h2');

h2.addEventListener('mouseover', ()=>{
    document.querySelector('ul').innerHTML = 'my new ul blah';
});

// types of Events and the "event attribute"

// the event parameter gives us information about the event 

// 1) pointer events: click, mousedown, mouseup, mouseover, mouseleave, mouseenter e.t.c

var btn = document.querySelector('.btn');

btn.addEventListener('mouseenter', (event)=>{
    document.querySelector('ol').innerHTML = 'Hello there';
    console.log(event.type); // gives the type of event
    console.log(event.target); // the element the event
    console.log(event.target.id) // gives you the id of the target
    console.log(event.target.className); // gives you the class name of the target
    console.log(event.target.classList); // gives you the class name of the target
})

// you can use "e" instead of "event"

var btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', (e)=>{
    console.log(e);
    console.log(e.type); // gives the type of event
    console.log(e.target); // the element the event
    console.log(e.target.id) // gives you the id of the target
    console.log(e.target.className); // gives you the class name of the target
    console.log(e.target.classList); // gives you the class name of the target
})

// 2) keyboard events: keyup, keydown, keypress, etc.
var inputEmail = document.querySelector('input[type="email"]');

inputEmail.addEventListener('keyup', (e)=>{
    console.log(e.target.value);
    var write = document.querySelector('#heading2');
    write.innerHTML = e.target.value;
})

// 3) focus events
var inputText = document.querySelector('input[type = "text"]');

inputText.addEventListener('focus', (e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
})

// Assignment: Definition of events

// Solutions
// JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event.

// 4) submit event

var form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('form submitted');
    console.log(e);
    var input = document.querySelector('#formText');
    console.log(input.value)
})

// add, remove and toggle css classes
var btn = document.querySelector('#click');
btn.addEventListener('click', ()=>{
    var h2 = document.querySelector('#heading2');
    // h2.Classlist.add('new')
    // h2. Classlist.remove('size');
    h2.classList.toggle('new');
})