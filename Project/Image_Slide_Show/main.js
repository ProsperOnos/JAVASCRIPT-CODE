let images = ['./imgs/food 1.avif', './imgs/food 2.jpg', './imgs/food3.avif', './imgs/food4.jpg', './imgs/food 5.jpg'];

let i = 0;

function changeImage(){

    const image = document.querySelector('#img');

    image.src = images[i];
 
    if(i < images.length -1){
        i++
    }

    else{
        i = 0;
    }

    setTimeout(changeImage, 2000)
};

changeImage();

// translate this solution to english line by line