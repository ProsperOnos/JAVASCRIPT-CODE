const pro_bg = document.querySelector('.p_m-bg');
const click_btn = document.querySelector('#log_btn');
const remove = document.querySelector('#cancel');
const body = document.querySelector('body') 
const password = document.querySelector('#password');
const eyeicon = document.querySelector('#eye_icon');

click_btn.addEventListener('click', ()=>{
    pro_bg.style.display = 'block';

})

remove.addEventListener('click', ()=>{
    pro_bg.style.display = 'none'
})

body.addEventListener('click', (e)=>{
    if(e.target.classList.contains('p_m-bg'))
    pro_bg.style.display = 'none';
})

eyeicon.addEventListener('click', ()=>{
    if( password.type === "password"){
        password.type = "text";
        eyeicon.src = "imgs/see password.png"
    }else{
        password.type = "password";
        eyeicon.src = "imgs/not see password.png"
    }
})