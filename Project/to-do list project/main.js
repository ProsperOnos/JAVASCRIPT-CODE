// here  t_form to be used is declared and document.querySelector grabs the element in our HTML (DOM) using its id name
const t_form = document.querySelector('#task_form');

// here the t_form (input field) to be used is declared, document.querySelector grabs the element in our HTML (DOM) using its id name
const t_bar = document.querySelector('#Task_bar');

// here t_bar (error message that pops up when the input field is empty) is declared, document.querySelector grabs the element in our HTML (DOM) using its id name
const e_msg = document.querySelector('#error')

// here task (container for the list items) is declared document.querySelector grabs the element in our HTML (DOM) using its id name
const task = document.querySelector('#Tasks')

// the form was given a event listener and given the event os submit that is to say on submition the flowwing codes should take action
t_form.addEventListener('submit', (e)=>{

    // here the preventDefault attribute is given to the form, this prevents the page from reloading when ever the submit button is clicked as to reload is the default action of the submit button in a form when clicked 
    e.preventDefault();

    // here conditional statements are used in the sense that when the input field is empty (t_bar is empty) then an error message should appear the value given below is now inserted into a paragraph element in our html
    if(t_bar.value === ''){

        // This is the variable that was declared above when document.querySelector grabs the element in our HTML (DOM) using its id name, here a value is being assigned to it when the input field is empty (line 20)
        e_msg.innerHTML = 'Please enter a Task';
    }

    // This is a conditional statement of when the if statement condition is not met
    else{

        // here an element is created this element it an li(listItem)
        let li = document.createElement('li');

        // here it is assigned a class (task)
        li.classList = 'task';

        // here the li content (innerHTML) is given a value of what will be inputed (typed) into the input field (t_bar.value)
        li.innerHTML = t_bar.value;

        // here an element is created this element it a button
        let btn = document.createElement('button');

        // here the button content (innerHTML) is being assigned to a value of an html entity (&times (x)); 
        btn.innerHTML = '&times;';

        // here the button is given a class of remove which will be used later as the code goes on;
        btn.classList.add('remove');

        // here the the li is made the parent element of the button by appending it as a child 
        li.appendChild(btn);

        //////////// since the button is now a child on the li here were the li is being appending to the task the button is also in turn appended the task varibable was used to grab the ul element from the dom so now the li and button (which is the child element of the li) are now decendant elements of the ul in the html(dom) the li being direct child and the button decendant of the ul
        task.appendChild(li);

        //here the input field value (t_bar.value) is assigned to an empty string in order to empty the it when ever the submit button is click, it is able to work as javascript starts from top to bottom
        t_bar.value = '';

        // same thing apply here the inner html is given an innerHTML of an empty string inorder to remove the error message when the button is clicked this two code works after all the above codes has been executed
        e_msg.innerHTML = '';
    }
}) 

// here an eventLisitener is added the event called click is given to the ul which was assigned to a varaible called task and grab from the dom using querySelector
task.addEventListener('click', (e)=>{

    // here a conditional statement is writen sayng that if the event target has a class of task then let the class change to complete on click using toogle which means it should apper on click and disapper again on click
    if(e.target.classList.contains('task')){
        e.target.classList.toggle('complete');
    }

    // here a conditional statement is writen if the event target has a class of remove let the event target parentElement be removed 
    if(e.target.classList.contains('remove')){
        e.target.parentElement.remove()
    }
});
