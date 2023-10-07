const hambuger = document.querySelector('.hambuger');
const navbar = document.querySelector('.nav_links');

hambuger.addEventListener('click',()=>{
    navbar.classList.toggle('active')
    hambuger.classList.toggle('active')
})