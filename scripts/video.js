const play_btn = document.querySelector(".video__icon");
const video_container = document.querySelector(".video__container");
const video_close = document.querySelector(".video__btn");


//--------(For mobile) If click on the video button then send user to youtube
play_btn.addEventListener("click",(event)=>{
    checkViewoPortWidth();
});

function checkViewoPortWidth(){
    let viewport_width = window.innerWidth;
    console.log(viewport_width);

    if(viewport_width<700) //send to youtube
    location.href = "https://www.youtube.com/watch?v=zYhdKPwgjGo";
    else
    openVideoOnSamePage();
}

//--- (For PC) open the video on the same page

function openVideoOnSamePage(){
    // Show video on screen with black background
    video_container.style.display = "block";
    document.body.style.backgroundColor= "rgba(0, 0, 0, 0.655)";

    //--- Close the video when close button is clicked
    video_close.addEventListener("click",event=>{
        video_container.style.display = "none";
        document.body.style.backgroundColor= "transparent";
    });
}