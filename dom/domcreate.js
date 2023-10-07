// document.createElement(), document.createTextNode, insertBefore(), replaceChild()

var newh3 = document.createElement('h3');
newh3.classList = 'myh3'; // classname;
newh3.id = 'myh3'; // id
newh3.setAttribute('style', 'color: red');
newh3.innerHTML = 'This is my new Element';

/*

var h3txt = document.createTextNode('This is my new Elementttt');
newh3.appendChild(h3txt);

*/

// appendChild to the body --- parent.appendChild(child)
var body = document.querySelector('body');
// body.appendChild(newh3); // this will place it at the very bottom of the body

// insertBefore "para1" ---- parent.insertBefore(newElement, para1);
var para1 = document.querySelector('.para1');
// body.insertBefore(newh3, para1);

// replaceChild "para1" ---- parent.replaceChild(newElement, para1);
var para1 = document.querySelector('.para1');
body.replaceChild(newh3, para1);

console.log(newh3);

// Assignment: Create the element below from Javascript and insert into the body of the html document

// solution

var div1 = document.createElement('div');
div1.classList = 'myDiv';
console.log(div1)

var para2 = document.createElement('p');
para2.id = 'para2';
para2.innerHTML = 'Hello dear';
para2.style.fontSize = '20px';
para2.style.color = 'blue';
div1.appendChild(para2);

body.insertBefore(div1, newh3);



/*

    <div class="myDiv">
        <p id="para2" style="font-size: 20px; color: blue">
            Hello dear
        </p>
    </div>

*/