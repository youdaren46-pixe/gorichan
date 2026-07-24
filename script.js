const menu = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

menu.onclick = ()=>{

    navbar.classList.toggle("active");

}
const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const dotsContainer = document.querySelector(".dots");

let index = 0;

slides.forEach((slide,i)=>{

    const dot=document.createElement("span");

    dot.classList.add("dot");

    if(i==0) dot.classList.add("active");

    dot.onclick=()=>showSlide(i);

    dotsContainer.appendChild(dot);

});

const dots=document.querySelectorAll(".dot");

function showSlide(i){

    slides.forEach(s=>s.classList.remove("active"));

    dots.forEach(d=>d.classList.remove("active"));

    slides[i].classList.add("active");

    dots[i].classList.add("active");

    index=i;

}

next.onclick=()=>{

    index++;

    if(index>=slides.length) index=0;

    showSlide(index);

}

prev.onclick=()=>{

    index--;

    if(index<0) index=slides.length-1;

    showSlide(index);

}

setInterval(()=>{

    index++;

    if(index>=slides.length) index=0;

    showSlide(index);

},5000);