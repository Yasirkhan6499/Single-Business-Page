let dropdown_btn = document.querySelector(".dropdown-btn");
let menu = document.querySelector(".menu");
let main_logo = document.querySelector(".main-logo");

dropdown_btn.addEventListener("click",event=>{
    let dropdown_content = document.querySelector(".dropdown-content");
    let show_content = dropdown_content.classList;

    show_content.toggle("show-content");

    
});

//------ if the window width is greater than 900px
//------ and the menu is at top, then remove the background
//------ color white from the menu
window.addEventListener("scroll",event=>{
    menuBackground();
});
window.addEventListener("resize",event=>{
    menuBackground();
});

function menuBackground(){
    let menu_background;
    let logo_color;
    if(window.innerWidth >= 900){ //if big screen
        if(window.scrollY>0){ //if scroll down
        menu_background = "white";
        logo_color = "black";
        //-- if logo is down so place it up while scrolling down
        if(window.innerWidth >= 1200)
        menu.style.paddingTop = "0rem";
        
        }
        else{
        menu_background = "none";
        logo_color = "white";

        //-- if logo is up so place it up while scrollbar is at top
        if(window.innerWidth >= 1200)
        menu.style.paddingTop = "4rem";
        else menu.style.paddingTop = "0rem";
        }
        

        menu.style.background = menu_background;
        main_logo.style.color= logo_color;
    }
    else{ //if small screen
        menu.style.background = "white";
        main_logo.style.color= "black";
    }
}

// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );