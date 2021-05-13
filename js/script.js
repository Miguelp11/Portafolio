//inicializar wow
AOS.init();

// menu
const menu = document.getElementById("menu");
const hamburguesa= document.getElementById("menu-hamburguesa");
const link= document.querySelectorAll('nav ul li a');

hamburguesa.addEventListener("click", ()=>{
    menu.classList.toggle("menu-mostrar");
});

for (let index = 0; index < link.length; index++) {
    link[index].addEventListener("click", ()=>{
        menu.classList.remove("menu-mostrar");
    });
}

// Animacion
var typed = new Typed('.animado', {
    strings: [
    "Desarrollador web",
    "Desarrollador Front-End",
    "Freelance"
],
    typeSpeed: 100,
    backSpedd: 50,
    loop: true
 });

// modal proyectos
const modal= document.getElementById('modal-portafolio');
const modal1= document.getElementById('modal-portafolio1');
const modal2 =document.getElementById('modal-portafolio2')
const modal3 =document.getElementById('modal-portafolio3')
const botonModal= document.getElementById('cerrar-modal');
const botonModal1= document.getElementById('cerrar-modal1');
const botonModal2= document.getElementById('cerrar-modal2');
const botonModal3= document.getElementById('cerrar-modal3');
const proyecto1= document.getElementById('proyecto1');
const proyecto2= document.getElementById('proyecto2');
const proyecto3 =document.getElementById('proyecto3');
const proyecto4 =document.getElementById('proyecto4');

proyecto1.addEventListener('click', ()=>{
    modal.classList.add('abrir-modal');
});
proyecto2.addEventListener('click', ()=>{
    modal1.classList.add('abrir-modal');
});
proyecto3.addEventListener('click', ()=>{
    modal2.classList.add('abrir-modal');
});
proyecto4.addEventListener('click', ()=>{
    modal3.classList.add('abrir-modal');
});
botonModal.addEventListener('click',()=>{
    modal.classList.toggle('abrir-modal');
});
botonModal1.addEventListener('click',()=>{
    modal1.classList.toggle('abrir-modal');
});
botonModal2.addEventListener('click',()=>{
    modal2.classList.toggle('abrir-modal');
});
botonModal3.addEventListener('click',()=>{
    modal3.classList.toggle('abrir-modal');
});