const h1 = document.querySelector('h1');

h1.addEventListener('click', ()=>{
    if(h1.innerHTML === 'JAVASCRIPT'){
        h1.innerHTML = 'IS LEARNABLE'
    }
    else{
        h1.innerHTML = 'JAVASCRIPT'
    }
});