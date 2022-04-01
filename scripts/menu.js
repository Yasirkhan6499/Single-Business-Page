let dropdown_btn = document.querySelector(".dropdown-btn");

dropdown_btn.addEventListener("click",event=>{
    let dropdown_content = document.querySelector(".dropdown-content");
    let show_content = dropdown_content.classList;

    show_content.toggle("show-content");

    
});

// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );