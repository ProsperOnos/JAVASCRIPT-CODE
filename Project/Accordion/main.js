const accordionHeaders = document.querySelectorAll('.accordion_header');

// console.log(accordionHeaders) this gives us a nodelist of all accordion headers

// Use the forEach() to loop through all the accordion header so as to add an event listener to each of them. when the event fires the class of active should be added to the accordion_header when clicked

accordionHeaders.forEach((accordionHeaders)=>{
    accordionHeaders.addEventListener('click', ()=>{
        accordionHeaders.classList.toggle('active')
    })
})