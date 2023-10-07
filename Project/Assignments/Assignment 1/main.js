const java = document.querySelector('.java');
const learn = document.querySelector('.learn');

java.addEventListener('click', ()=>{
    java.classList.remove('active')
    learn.classList.add('active')
});

learn.addEventListener('click',()=>{
    learn.classList.remove('active')
    java.classList.add('active')
});