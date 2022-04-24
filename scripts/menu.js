let dropdown_btn = document.querySelectorAll(".dropdown-btn");
let menu = document.querySelector(".menu");
let main_logo = document.querySelector(".main-logo");

// dropdown_btn.addEventListener("click",event=>{
//     let dropdown_content = document.querySelector(".dropdown-content");
//     let show_content = dropdown_content.classList;

//     show_content.toggle("show-content");

    
// });
dropdown_btn.forEach(element=>
element.addEventListener("click",event=>{
    let dropdown_content = element.parentElement.nextElementSibling;
    // let dropdown_content = nextElement.querySelector(".dropdown-content");
    let show_content = dropdown_content.classList;
    console.log(element.parentElement);
    show_content.toggle("show-content");

    //-----if question section
    if(dropdown_content.classList.contains("question__content")){
    show_content.toggle("content__padding");
    //change plus to minus or vise versa
    //const element = document.querySelector(".plus");
    if(element.textContent === "+"){
    element.textContent = "-";
    element.style.fontSize = "2.8rem"
    element.style.marginTop = "-0.4rem";
    }
    else {
    element.textContent = "+";
    element.style.fontSize = "2rem";
    element.style.marginTop = "0.4rem";
    }

    }
 
})
);

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

    //--- Add box shadow to menu when scrolling 
    menu.classList.add("menu-box-shadow");

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

         //--- remove box shadow to menu when scrolling 
    menu.classList.remove("menu-box-shadow");

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