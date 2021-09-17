const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");

const anotherBlogerImages = document.querySelector(".another-blogers__images");

const delta = 321;


const handleClickLeft = (e)=>{

    anotherBlogerImages.scrollLeft = anotherBlogerImages.scrollLeft - delta;


}

const handleClickRight = (e)=>{


    anotherBlogerImages.scrollLeft = anotherBlogerImages.scrollLeft + delta1;
    
}




left.addEventListener("click", handleClickLeft);

right.addEventListener("click", handleClickRight)
