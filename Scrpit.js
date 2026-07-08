const menuButton =
document.getElementById("menuButton");


const navMenu =
document.getElementById("navMenu");


if(menuButton){

menuButton.addEventListener("click",()=>{

navMenu.classList.toggle("aktiv");

});

}