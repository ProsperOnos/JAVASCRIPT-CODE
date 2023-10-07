// DOM SATNDS FOR - DOCUMENT OBJECT MODEL.

// It is the standard for modifying HTML elements. It treats the document as a  tree of nodes

/*
    html Selectors, changing the contents of html elements, changing styles of elements, creating new html elements, events, parentNodes and ParentElement, childNodes and Elements, todoList Project
*/

// html selectors are used to select Elements for the DOM

/*
  Document.getElementById(), document.getElementByClassName, socument.getelementByTagName, document.querySelector(), document.querySelectorAll() 
*/

// getElementById(): grabs elements by their id
var h1 = document.getElementById('heading1');
console.log(h1);

var ul = document.getElementById('list');
console.log(ul); // this gives us the ul

// grabing the children of the ul
var lis = ul.children; // all list items
console.log(lis);

var firstChildUl = ul.children[2];

// var firstChildUl = ul.firstElementChild
// var lastChildUl = ul.lastElementChild
console.log(firstChildUl);

// ===============> changing the inner contents of elements

var ul = document.getElementById('list');
// ul.innerHTML = 'changed';
// ul.textContent = 'changed';
// ul.innerText = 'changed blah';

// ========> difference btw innerHtml, textContent and innerText
var h1 = document.getElementById('heading1');
console.log(h1.innerHTML); // this gives you everything inside the open and close tag of an element

console.log(h1.innerText); // this gives you the text content but pays attention to the sytles inside of the element

console.log(h1.textContent); // this just gives you the text content of an element


// ==========> loop through html collections
var ul = document.getElementById('list');
var lis = ul.children;
// console.log(lis) ==> html collection of the lis


for(i = 0; i < lis.length; i++){
  lis[i].innerHTML = 'blah';
  lis[i].style.color = 'red';
}

// =====> changing css styles from Javascript;

var para1 = document.getElementById('para1');
para1.style.color = 'blue';
para1.style.fontSize = '25px';
para1.style.backgroundColor = 'yellow';


// document.getElementbyClassName(): grabs elements by their class name;
var btn = document.getElementsByClassName('btn');
console.log(btn);

var listItem1 = document.getElementsByClassName('listItem1');
console.log(listItem1);

for(x = 0; x < listItem1.length; x++){
  listItem1[x].style.color = 'purple';
}

// document.getElementByTagName(); grabs elements by their tag name

var allInputs = document.getElementsByTagName('input');
console.log(allInputs);

for(y = 0; y < allInputs.length; y++){
  allInputs[y].value = 'hello';
}

// getting Elements byid, byclassName and byTagName gives you "HTML collections" HTML COLLECTIONS are like array but you cannot use certain array methods on them e.g array Iteration methods()


// querySelector() and querySelectorAll();

// querySelector() lets you grab item from the dom using either their class names, ids, or tag names

var h1 = document.querySelector('#heading1'); // it will grab the first item with this id only
var listItem = document.querySelector('.listItem'); // it will grab only first match
var input = document.querySelector('input') // it will grab only the first match

console.log(h1);
console.log(listItem);
console.log(input);

// querySelectorAll(): select all matches of a particular class name, id or tage name from our dom
var listItem = document.querySelectorAll('.listItem'); // it will grab all the elements that matches
console.log(listItem);

var allH1 = document.querySelectorAll('h1'); // it will grab all the elements that matches
console.log(allH1);

var ol = document.querySelector('#list2')
var kids = ol.children; // this will also give you html collection because we used the children property to all the decendants of the ol

console.log(kids)
// console.log(ol.children);
var firstChildOfOl = ol.firstElementChild;
firstChildOfOl.innerHTML = 'First baby';

var middleChildOfOl = ol.children[2];
middleChildOfOl.innerHTML = 'middle baby';


// assignment: use the for - Loop and the Array.ForEach() method to change the text content and color of all "h5 elements" in our dom to "i understand" and "red" respectively 
// solution

// FOR LOOP
/*
var allh5 = document.getElementsByTagName("h5");
console.log(allh5);
var h = 0
for(h = 0; h < allh5.length; h++){
  allh5[h].innerHTML = "I understand";
  allh5[h].style.color = "red";
  allh5[h].style.fontSize = "20px";
}
*/

// FOR EACH LOOP
var allh5 = document.querySelectorAll("h5");
console.log(allh5);

allh5.forEach((value)=>{
    value.innerHTML = "I Understand";
    value.style.color = "red";
});


// selecting a group of elements using querySelectorAll() gives you "Nodelists". Nodelist are like arrays and you can freely use array methods no them e.g array Iteration methods();


// ParentElement/ParenNode && childnodes
const head = document.querySelectorAll("head");
console.log(head.parentElement); // this gets us the parent of the head element
var para1 = document.querySelector('.para1');
console.log(para1.parentElemet);

var lis = document.querySelectorAll(".listItem")
lis.forEach((li)=>{
  console.log(li.parentElement)
})

// childNodes
var body = document.querySelector("body");
console.log(body.childNode); // gives you all the text nodes and Element nodes
console.log(body.children); // gives you just the element
console.log(body.firstChild) // you get text
console.log(body.firstElementChild); // the first element in the body
console.log(body.lastElementChild);
console.log(body.children[10]);


// siblings: preiouselementSiblings, nextElementSibling
var body= document.querySelector("body");
console.log(body.previousElementSibling); // head
console.log(body.nextElementSibling); // null -- no next sibling

var para1 = document.querySelector(".para1");
console.log(para1.nextElementSibling.nextElementSibling.nextElementSibling);

console.log(para1.previousElementSibling.previousElementSibling);