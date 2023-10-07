const modalBtn = document.querySelector('.modal_btn');
const modalBackground = document.querySelector('.modal_background');
const closeBtn = document.querySelector('.close_btn');


// Add click event to the modal btn to launch the modal
modalBtn.addEventListener('click', ()=>{
    modalBackground.style.display = 'block';
})

// Add click event to the close btn to close the modal
closeBtn.addEventListener('click', ()=>{
    modalBackground.style.display = 'none';
})

// add an event listener to the window in order to target the modal background

window.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('modal_background')){
        modalBackground.style.display = 'none';
    }
})