/* ==========================================
   LIGA UTAMA
   script.js
========================================== */

/* ===============================
   LOADER
=============================== */

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 600);
    }
});


/* ===============================
   MOBILE MENU
=============================== */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click",()=>{

    navbar.classList.toggle("active");

});


/* Tutup menu saat klik menu */

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});


/* ===============================
   HERO SLIDER
=============================== */

const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

const dotsContainer = document.querySelector(".dots");

let current = 0;


/* Membuat Dots */

slides.forEach((slide,index)=>{

    const dot = document.createElement("span");

    if(index===0){

        dot.classList.add("active");

    }

    dot.addEventListener("click",()=>{

        current=index;

        showSlide(current);

    });

    dotsContainer.appendChild(dot);

});

const dots=document.querySelectorAll(".dots span");


function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}


/* NEXT */

nextBtn.addEventListener("click",()=>{

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

});


/* PREV */

prevBtn.addEventListener("click",()=>{

    current--;

    if(current<0){

        current=slides.length-1;

    }

    showSlide(current);

});


/* AUTO SLIDE */

setInterval(()=>{

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

},5000);


/* ===============================
   STICKY HEADER
=============================== */

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


/* ===============================
   BACK TO TOP
=============================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===============================
   SCROLL ANIMATION
=============================== */

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});


document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});


/* ===============================
   SMOOTH SCROLL
=============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

const toggleBanner = document.getElementById("toggleBanner");
const bannerContent = document.querySelector(".banner-content");

let open = true;

toggleBanner.onclick = function () {

    if(open){

        bannerContent.style.marginLeft = "-130px";
        toggleBanner.innerHTML = "❯";

    }else{

        bannerContent.style.marginLeft = "0";
        toggleBanner.innerHTML = "❮";

    }

    open = !open;

};
/* ===============================
   SWIPE MOBILE SLIDER
=============================== */

let touchStartX=0;

let touchEndX=0;

if (slider) {
    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;

        if (touchEndX < touchStartX - 50) nextBtn.click();
        if (touchEndX > touchStartX + 50) prevBtn.click();
    });
}

