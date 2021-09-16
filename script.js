const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");

const anotherBlogerImages = document.querySelector(".another-blogers__images");


const handleClickLeft = (e)=>{

    anotherBlogerImages.scrollLeft = anotherBlogerImages.scrollLeft - 200;


}

const handleClickRight = (e)=>{


    anotherBlogerImages.scrollLeft = anotherBlogerImages.scrollLeft + 200;
    
}




left.addEventListener("click", handleClickLeft);

right.addEventListener("click", handleClickRight)
