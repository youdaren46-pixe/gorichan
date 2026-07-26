const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {

        menuBtn.innerHTML = "✕";

    } else {

        menuBtn.innerHTML = "☰";

    }

});

overlay.addEventListener("click", function () {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.innerHTML = "☰";

});

document.querySelectorAll("#mobileMenu a").forEach(link => {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});
const slides=document.querySelectorAll(".hero-slide");
const dots=document.querySelectorAll(".dot");

const prev=document.querySelector(".hero-prev");
const next=document.querySelector(".hero-next");

let index=0;

function showSlide(i){

slides.forEach(slide=>slide.classList.remove("active"));

dots.forEach(dot=>dot.classList.remove("active"));

slides[i].classList.add("active");

dots[i].classList.add("active");

}

next.onclick=()=>{

index++;

if(index>=slides.length){

index=0;

}

showSlide(index);

}

prev.onclick=()=>{

index--;

if(index<0){

index=slides.length-1;

}

showSlide(index);

}

dots.forEach((dot,i)=>{

dot.onclick=()=>{

index=i;

showSlide(index);

}

});

setInterval(()=>{

index++;

if(index>=slides.length){

index=0;

}

showSlide(index);

},5000);
const toggleBtn=document.getElementById("toggleBanner");
const floatingBanner=document.getElementById("floatingBanner");

let isOpen=true;

toggleBtn.addEventListener("click",()=>{

    if(isOpen){

        floatingBanner.classList.add("closed");

        toggleBtn.innerHTML="❯";

    }else{

        floatingBanner.classList.remove("closed");

        toggleBtn.innerHTML="❮";

    }

    isOpen=!isOpen;

});
