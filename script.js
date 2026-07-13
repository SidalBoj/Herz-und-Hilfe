/* ==========================================
HERZ & HILFE
Premium Script
========================================== */

document.addEventListener("DOMContentLoaded", () => {

/* =============================
Header beim Scrollen
============================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (window.scrollY > 60) {

header.classList.add("scrolled");

} else {

header.classList.remove("scrolled");

}

});


/* =============================
Hero Animation
============================== */

const hero = document.querySelector(".hero-content");

if(hero){

setTimeout(()=>{

hero.classList.add("fadeHero");

},300);

}


/* =============================
Bereiche einblenden
============================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


/* =============================
Smooth Scroll
============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* =============================
Aktiver Menüpunkt
============================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* =============================
Karten Hover
============================== */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";
card.style.boxShadow="0 20px 40px rgba(0,0,0,.12)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";
card.style.boxShadow="0 8px 25px rgba(0,0,0,.06)";

});

});


/* =============================
Zahlenanimation
============================== */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});


/* =============================
FAQ Akkordeon
============================== */

document.querySelectorAll(".faq-question").forEach(question=>{

question.addEventListener("click",()=>{

question.parentElement.classList.toggle("open");

});

});


/* =============================
Nach oben Button
============================== */

const topButton=document.querySelector("#topBtn");

if(topButton){

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.classList.add("showTop");

}else{

topButton.classList.remove("showTop");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

console.log("💚 Herz & Hilfe erfolgreich geladen.");

}); 