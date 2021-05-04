const menu = document.getElementById("menu");
const hamburguesa= document.getElementById("menu-hamburguesa");

hamburguesa.addEventListener("click", ()=>{
    menu.classList.toggle("menu-mostrar");
});