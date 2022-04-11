const test_container = document.querySelector(".testimonial__slider");
const testimonials = document.querySelectorAll(".testimonial");
const btns = Array.from(document.querySelectorAll(".test-btn"));
// const slider = document.querySelector(".")
let count = 0;
let btn_counter = 0;
let container_width = test_container.clientWidth;

//-- to set all the testimonials in line with the right width
testimonials.forEach(test=>{
    test.lastElementChild.style.width = container_width+"px";

});

//--- move the testimonials 
setInterval(testimonialsSlide,4000);
function testimonialsSlide(){
    if(count>=testimonials.length-1) return; //dont slide when last testimonial

    test_container.style.transition = "transform 0.4s ease-in-out"

    count++;
    btn_counter = count;
    btn_counter=(btn_counter<btns.length)?btn_counter:0;
    
    activeButtonColor(btn_counter); //change btn color
    test_container.style.transform = "translateX("+(-container_width*count)+"px)";
}

test_container.addEventListener("transitionend",()=>{
    if(count>=testimonials.length-1){
        test_container.style.transition = "none";
        count=0;
        test_container.style.transform = "translateX("+(-container_width*count)+"px)";
    }

});

//---change test on buttons click
for(let btn in btns){
  btns[btn].addEventListener("click",()=>{
      count=btn-1;
      console.log(btn);
      testimonialsSlide(); //change testimonial on click
      
      
  });
}

function activeButtonColor(btn_index){
   

    let active_btn = document.querySelector(".active-btn");
    //change the color of the active btn to white again
    active_btn.style.background = "white"; 
    active_btn.classList.remove("active-btn");

    //set the new active btn
    btns[btn_index].style.background = " rgb(1, 159, 125)"; 
    btns[btn_index].classList.add("active-btn");
}