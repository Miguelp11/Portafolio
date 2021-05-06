// menu
const menu = document.getElementById("menu");
const hamburguesa= document.getElementById("menu-hamburguesa");

hamburguesa.addEventListener("click", ()=>{
    menu.classList.toggle("menu-mostrar");
});

// modal proyectos
const modal= document.getElementById('modal-portafolio');
const modal1= document.getElementById('modal-portafolio1');
const botonModal= document.getElementById('cerrar-modal');
const botonModal1= document.getElementById('cerrar-modal1');
const proyecto1= document.getElementById('proyecto1');
const proyecto2= document.getElementById('proyecto2');

proyecto1.addEventListener('click', ()=>{
    modal.classList.add('abrir-modal');
});
proyecto2.addEventListener('click', ()=>{
    modal1.classList.add('abrir-modal');
    
});
botonModal.addEventListener('click',()=>{
    modal.classList.toggle('abrir-modal');
});
botonModal1.addEventListener('click',()=>{
    modal1.classList.toggle('abrir-modal');
});