//inicializar aos
AOS.init();

// Pantalla de carga
addEventListener('load',()=>{
    const contenedor = document.querySelector('.contenedor-carga');
    contenedor.style.opacity=0;
    contenedor.style.visibility= 'hidden';
})

// menu
const menu = document.getElementById("menu");
const hamburguesa= document.getElementById("menu-hamburguesa");
const link= document.querySelectorAll('nav ul li a');

hamburguesa.addEventListener("click", ()=>{
    menu.classList.toggle("menu-mostrar");
});

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", ()=>{
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

//Indicador de menu 1024px
const secciones =document.querySelectorAll('.seccion');
const itemsMenu = document.querySelectorAll('.menu-item');

const funcionObservar = (entradas) =>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            const itemAcutal = Array.from(itemsMenu).find(item => item.dataset.url === entrada.target.id);
            itemAcutal.classList.add('activo');
            for (const item of itemsMenu) {
                if (item != itemAcutal){
                    item.classList.remove('activo');
                }
            }
        }
    });
}

const observer = new IntersectionObserver(funcionObservar, {
    root: null,
    rootMargin: '-50px',
    threshold: 0.5
});

secciones.forEach(seccion => observer.observe(seccion))


// modal proyectos
const modal= document.querySelectorAll('.modal-portafolio');
const botonModal= document.querySelectorAll('.cerrar-modal');
const proyecto= document.querySelectorAll('.portafolio-img');

//Abrir modales
for (let i = 0;  i< proyecto.length; i++) {
    proyecto[i].addEventListener('click', ()=>{
        let ruta= proyecto[i].children[0].children[0].src;
        for (let j=0; j< modal.length; j++){
            if (ruta == modal[j].children[0].children[0].children[0].src){
                modal[j].classList.add('abrir-modal');
            }
        }
    });
}

//Cerrar modales
for(let i=0; i<botonModal.length; i++){
    botonModal[i].addEventListener('click',()=>{
        for (let j=0; j< modal.length; j++){
            modal[j].classList.remove('abrir-modal');
        }
    });
}