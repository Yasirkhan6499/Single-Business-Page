


//////make the whole program from the start and use position
// relative and absolute instead of flex. and then connect the
//images by setting the "left" of first image to the position 
//of the last image

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

  ///------------------
  let transitionEndEventName = getTransitionEndEventName();

const img_slider1 = document.getElementsByClassName("dev__image-slider1")[0];
const imgs = Array.from(img_slider1.children);
let img_move = 0;


setInterval("changeSlide()",4000);

function changeSlide(){
    
    let img_width = (imgs[0].offsetWidth+13);
    img_move+=img_width;
     for(let img of imgs)
     img.style.transform = 'translateX('+(-img_move)+'px)';

    // img_slider1.style.transform = 'translateX('+(-img_move)+'px)';

    // setInterval("changeImagePos()",8000);
          //when transition of the pics is finished, then 
      //move the first pic to the end of the chain
      this.addEventListener(transitionEndEventName, changeImagePos);
}
function changeImagePos(){
 
    const first_img = img_slider1.querySelector(".first-img");
    const next_img = first_img.nextElementSibling || img_slider1.firstElementChild;

    if(!first_img.nextElementSibling){
    //reset the transform of all the pics
    img_move=0;
    }
    
    //--move first image to last
     first_img.style.left = 1200+"px";

    next_img.classList.add("first-img");
    //img_slider1.appendChild(first_img);
   first_img.classList.remove("first-img");
    
    
     //end the transitionEnd Evnet listener
    this.removeEventListener(transitionEndEventName,changeImagePos);
    
}


// for(let img of imgs){

// }