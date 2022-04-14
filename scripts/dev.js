const dev_img = Array.from(document.querySelectorAll(".dev__img"));
const dev_slider = document.querySelector(".dev__image-slider");
const dev_btns = Array.from(document.querySelectorAll(".dev__btn"));
const img_length = dev_img[0].clientWidth;
let counter=1;
let offset = 15;


let dev_interval = setInterval(slideDevImgs,4000);

function slideDevImgs(){
    
    dev_slider.style.transition = "transform 0.3s ease-in-out"
    dev_slider.style.transform = "translateX("+(-(img_length+offset)*counter)+"px)";
    counter++;
}
dev_slider.addEventListener("transitionend",()=>{
    if(counter>=dev_img.length-2){
        counter=0;
        dev_slider.style.transition = "none";
        dev_slider.style.transform = "translateX("+(-(img_length+offset)*counter)+"px)";
        counter++;
    }
});

for(let i=0; i<dev_btns.length; i++){
    console.log(dev_btns[i]);
    dev_btns[i].addEventListener("click",()=>{
        
        counter=i;
        slideDevImgs();
    });
}

//-------if user clicks or holds then stop the interval
// window.addEventListener("blur",()=>{
//     console.log("mouse down");

//     clearInterval(dev_interval);
// });
// window.addEventListener("focus",()=>{
//     console.log("mouseup");

//     dev_interval = setInterval(slideDevImgs,4000);
// });
//--- place images from left to right
// dev_img.forEach(img=>{
//     img.style.left = img_length*i+"px";
//     i++;
// });