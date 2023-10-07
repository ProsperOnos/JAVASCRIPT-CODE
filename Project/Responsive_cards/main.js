// This is a case study  for 15 cards. But any number of cards will work just fine with this code

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let slider = document.querySelector('.slider_width');
let items = document.querySelectorAll('.item');

let itemDisplay = 0;
let margin = 0;
let move = 0;
let incr = 0;

console.log(screen.width)
// display 4 items on desktop
if(screen.width > 990){
    itemDisplay = document.querySelector('.slider_container').getAttribute('item-display-d')
    // console.log(itemDisplay)
    margin = itemDisplay * 5
}

// display 3 items on tablet
if(screen.width > 700 && screen.width < 990){
    itemDisplay = document.querySelector('.slider_container').getAttribute('item-display-t') 
    console.log(itemDisplay)
    margin = itemDisplay * 6.7
}

// display 1 item on mobile
if(screen.width > 280 && screen.width < 700){
    itemDisplay = document.querySelector('.slider_container').getAttribute('item-display-m')
    console.log(itemDisplay);
    margin = itemDisplay * 20
}

// manage width of items
for(let i = 0; i < items.length; i++){
    items[i].style.width = (screen.width/itemDisplay) - margin + "px"
}

let itemsLeft = items.length % itemDisplay
console.log(itemsLeft);

let itemSlide = Math.floor(items.length / itemDisplay) -1 // (15 / 4 || 15 / 3 || 15 / 2)
console.log(itemSlide)
// move the slides the size of the screen width
nextBtn.addEventListener('click', ()=>{
    if(incr !== itemSlide + itemsLeft){ // 3 + 3
        if(incr === itemSlide){
            // When we have slided twice, we only want to slide "(screen.width/itemDisplay) * itemsLeft" else we will br sliding into empty spaces (15 cards case study)
            incr = incr + itemsLeft
            move = move - (screen.width/itemDisplay) * itemsLeft
        }else{
            incr++
            move = move - screen.width
        }
    }
    //slider.style.left = - screen.width + "px"
    // move = move - screen.width
    // slider.style.left = move + "px"
    slider.style.left = move + "px"
})


prevBtn.addEventListener('click', ()=>{
    if(incr !== 0){ // 3 + 3
        if(incr === itemsLeft){
            incr = incr - itemsLeft
            move = move + (screen.width/itemDisplay) * itemsLeft
        }else{
            incr--
            move = move + screen.width
        }
    }
    //slider.style.left = - screen.width + "px"
    // move = move - screen.width
    // slider.style.left = move + "px"
    slider.style.left = move + "px"
})
