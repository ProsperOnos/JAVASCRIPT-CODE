const h1 = document.querySelector('h1');


h1.addEventListener('click', ()=>{
    if(h1.innerHTML === '😁'){
        h1.innerHTML = '😡'
    }
    else{
        h1.innerHTML = '😁'
    }
})