const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});



let cursor = document.querySelector(".cursor");
let page2 = document.querySelector(".page2");
window.addEventListener("mousemove",(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.top = y + "px"
    cursor.style.left = x +"px"
   
    
})
page2.addEventListener("mouseenter",(e)=>{
    cursor.style.display = "none"
})
page2.addEventListener("mouseleave",(e)=>{
    cursor.style.display = "block"
})
