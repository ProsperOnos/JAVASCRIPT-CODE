const slides = document.querySelectorAll('.p_slide');
const forwardBtn = document.querySelector('#rightBtn');
const prevBtn = document.querySelector('#leftBtn');

function nextSlide(){
    // grab the active slide
    const activeSlide = document.querySelector('.p_slide.active')

    // check if active slide has a sibling
    if(activeSlide.nextElementSibling){
        //remove .active from the activeSlide
        activeSlide.classList.remove('active');
        activeSlide.nextElementSibling.classList.add('active')
    }else{
        //remove .active from the activeSlide
        activeSlide.classList.remove('active');
        slides[0].classList.add('active');
    }
}

forwardBtn.addEventListener('click',()=>{
    nextSlide();
})

function PreSlide(){
    const activeSlide = document.querySelector('.p_slide.active')
    if(activeSlide.previousElementSibling){
        activeSlide.classList.remove('active');
        activeSlide.previousElementSibling.classList.add('active');
    }
    else{
        activeSlide.classList.remove('active');
        slides[slides.length-1].classList.add('active');
    }
}




prevBtn.addEventListener('click',()=>{
    PreSlide();
})

let i = 0;
for(i; i<slides.length-1;){
    i++
}

