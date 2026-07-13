/* ==========================================
HERZ & HILFE
script.js
========================================== */

// Navigation erhält Schatten beim Scrollen

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
header.style.background = "rgba(255,255,255,0.97)";

} else {

header.style.boxShadow = "none";
header.style.background = "rgba(255,255,255,0.95)";

}

});


// Sanftes Einblenden aller Bereiche

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {

threshold: 0.15

});

sections.forEach(section => {

section.classList.add("hidden");

observer.observe(section);

});


// Sanftes Scrollen innerhalb der Seite

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior: "smooth"

});

});

});


// Hero leicht einblenden

window.addEventListener("load", () => {

document.querySelector(".hero-content").classList.add("fadeHero");

});


// Karten leicht hervorheben

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-8px)";
card.style.transition = "0.35s";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0px)";

});

});


// Aktueller Menüpunkt

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});
