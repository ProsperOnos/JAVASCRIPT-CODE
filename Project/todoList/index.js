const form = document.querySelector('#todoForm');
const input = document.querySelector('.todoInput')
const error = document.querySelector('#err');
const todosUl = document.querySelector('#todos');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log('submitted')
    if(input.value === ''){
        error.innerHTML = 'Please Enter a Task'
    }
    else{
        // create close button
        let btn = document.createElement('button');
        btn.innerHTML = '&times';
        btn.classList.add('close');

        // create li
        let li = document.createElement('li');
        li.innerHTML = input.value;
        li.classList = 'listItem';

        // append close btn to li
        li.appendChild(btn);

        // append li to ul

        todosUl.appendChild(li);

        // reset input field
        input.value = '';
        // reset error paragraph
        error.innerHTML = '';
    }
})

todosUl.addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.classList.contains('listItem')){
        e.target.classList.toggle('cancel');
    }

    if(e.target.classList.contains('close')){
        e.target.parentElement.remove();
    }
})

// ASSIGMENT: 
/*
    -Build your own todo app. 
    -make it beautiful. 
    -Use your own classes, ids and variables. 
    -Write and explain each line of your Javascript code in your ownwords in English.
*/