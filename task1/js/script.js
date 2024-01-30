const header= document.querySelector("header");

window.addEventListener("scroll" ,()=>{
    header.classList.toggle("sticky", window.scrollY>0);
});

const headermenu=document.querySelector(".header__menu"),
 menuBtn=document.querySelector(".menu-btn"), 
 headermenuitems=headermenu.querySelectorAll("li a");

menuBtn.addEventListener("click",()=>{
    headermenu.classList.toggle("show");
})

headermenuitems.forEach((item)=>{
    item.addEventListener("click", ()=>{
        headermenu.classList.remove("show");
    });
});