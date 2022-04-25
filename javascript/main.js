const firstsection = document.getElementById("firstsection");
window.addEventListener('scroll', ()=>{
    let offset = window.pageYOffset;
    firstsection.style.backgroundPositionY = offset * 0.3+"px";
})

