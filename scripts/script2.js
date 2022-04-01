//////-getting transiton end name
function getTransitionEndEventName() {
    var transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
     }
    let bodyStyle = document.body.style;
    for(let transition in transitions) {
        if(bodyStyle[transition] != undefined) {
            return transitions[transition];
        } 
    }
  }
  
  // using above code we can get Transition end event name
  let transitionEndEventName = getTransitionEndEventName();

  //------------------
const dev_container = document.querySelector(".dev-container");
const img_slider1 = document.getElementsByClassName("dev__image-slider1")[0];
const imgs = Array.from(img_slider1.children);
let img_width = imgs[0].offsetWidth;
let img_gap = 13;
let img_move = 0;
let dragendFunc;
// On window resize, resize the container and adjust the pics
window.addEventListener('resize',adjustPicsAndContainer);

adjustPicsAndContainer();

function adjustPicsAndContainer(){
    //console.log("resize");
    img_width=imgs[0].offsetWidth;
    //console.log(img_width);
    //adjust container height
dev_container.style.height = img_width+"px";
   
 //adjust pics position
for(let i=1; i<imgs.length;i++){
    imgs[i].style.left = i * (img_width+img_gap)+"px";
}

}

//--- move the pics left automatically---

//----------- when user is using another tab, then set the interval off
var autopager;
function startAutopager() {
    console.log("reaced");
    clearInterval("changeSlide()");  c   
   // console.log("start");
    autopager = window.setInterval(changeSlide, 2000);
}
function stopAutopager() {
    //console.log("blurr");
    window.clearInterval(autopager);
}

window.addEventListener('focus', startAutopager);    
window.addEventListener('blur', stopAutopager);
//-----------------------------------------------------
setInterval("changeSlide()",2000);


function changeSlide(){
  //console.log("reach1");
    //img_move+=img_width+img_gap;
    img_move=img_width+img_gap;
    let i=1;
      for(let img of imgs){
          img.style.display = "block"; //the image might be hidden because we hide it when we move it to the end
         // img.style.transform = 'translateX('+(-img_move)+'px)';
  
      img.style.left = (img.offsetLeft-img_move)+"px";
      
      }
      //when transition of the pics is finished, then 
      //move the first pic to the end of the chain
      this.addEventListener(transitionEndEventName, onTransitionEnd);
}

//move the first pic to the end of the chain
function onTransitionEnd(){
   // console.log("reach2");
    const first_img = img_slider1.querySelector(".first-img");
    const next_img = first_img.nextElementSibling || img_slider1.firstElementChild;
    let last_img_left = imgs[imgs.length-1].offsetLeft;
    
    //move the first img to last
    first_img.style.left =  last_img_left+img_width+img_gap+"px";
    first_img.style.display = "none";
    //first_img.style.transition = "left 0.0s";
    
    //--put the first img at last in the array as well
    imgs.shift(); //remove the first
    imgs[imgs.length]=first_img;

    first_img.classList.remove("first-img");
    next_img.classList.add("first-img");

    // dev_container.addEventListener("dragend",dragendFunc,false);

    //end the transitionEnd Evnet listener
    this.removeEventListener(transitionEndEventName,onTransitionEnd);
}

//---------if mouse swipe left, then change the image------
// mouseMoveLeft();

// function mouseMoveLeft(){
    
//     let mouseStartX=0;
//     let mouseEndX=0;
//     // dev_container.addEventListener("mousedown",e=>{

//     //     dev_container.style.cursor = "grab"; //mouse cursor
//     //     mouseX = e.clientX;
        


//     // });

//     // dev_container.addEventListener("mouseup", e=>{
        
//     //     dev_container.style.cursor = "pointer";
//     // });
//     dev_container.addEventListener("dragstart", function(event) {
//         //start dragging
//     //    console.log("start");
//      window.clearInterval(autopager); //changeslide will 
//      //not work when user is dragging the images
//        mouseStartX = event.clientX;
       
//       }, false);

//       dragendFunc = function(event){
          
//         autopager = window.setInterval(changeSlide, 2000);
//         mouseEndX = event.clientX;

//         if(mouseEndX<mouseStartX){ //mouse dragged left
//            changeSlide(); 
//            dev_container.removeEventListener("dragend",dragendFunc);
//         }
//       }
      
//       dev_container.addEventListener("dragend",dragendFunc, false);
      
//       /* events fired on the drop targets */
//       dev_container.addEventListener("dragover", function(event) {
        
//         console.log("drop");
//       }, false);
// }