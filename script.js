const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");

const anotherBlogersImages = document.querySelector(".another-blogers__images");

const delta = 327;


const handleClickLeft = (e)=>{

    anotherBlogersImages.scrollLeft = anotherBlogersImages.scrollLeft - delta;


}

const handleClickRight = (e)=>{


    anotherBlogersImages.scrollLeft = anotherBlogersImages.scrollLeft + delta;
    
}




left.addEventListener("click", handleClickLeft);

right.addEventListener("click", handleClickRight)
