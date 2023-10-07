const slides = document.querySelectorAll('.slide');
const forwardBtn = document.querySelector('#rightBtn');
const prevBtn = document.querySelector('#leftBtn');
const automatic = true;
let myInterval;

function nextSlide(){
    // grab the active slide
    const activeSlide = document.querySelector('.slide.active')

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
    clearInterval(myInterval);
    //set new interval
    myInterval = setInterval(nextSlide, 3000)
})


// prev  slides
prevBtn.addEventListener('click',()=>{
    prevSlide();
    // clear interval
    clearInterval(myInterval);
    //set new interval
    myInterval = setInterval(nextSlide, 3000)
})

function prevSlide(){
    // grab the active slide
    const activeSlide = document.querySelector('.slide.active');

    // check if active slide has a previous sibling
    if(activeSlide.previousElementSibling){
        //remove .active from the activeSlide
        activeSlide.classList.remove('active')
        activeSlide.previousElementSibling.classList.add('active');
    }else{
        // remove .active from the activeSlide
        activeSlide.classList.remove('active');
        slides[slides.length-1].classList.add('active')
    }
}

// make slide move forward on its own
if(automatic){
    myInterval = setInterval(nextSlide, 3000)
}