const btn = document.querySelector('button');
const body = document.querySelector('body');

let colors = ['blue', 'green', 'black', 'orange', 'indigo'];

let i = 0;

// console.log(colors[i])


// using the btn to change the color


// btn.addEventListener('click', ()=>{
//     body.style.backgroundColor = colors[i];

//     if(i < colors.lenght -1){
//         i++;
//     }
//     else{
//         i=0;
//     }
// })



// change color automatically

function changeColor(){
    body.style.backgroundColor = colors[i];

    if(i < colors.length -1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout(changeColor, 1000);
}

changeColor();

