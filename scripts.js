//Evitar el comportamiento por defecto de redirigir
//Selecciono todos los enlaces
const enlaces = document.querySelectorAll('a');
//Cambiar las imagenes por otra
//Seleccionar todas las imagenes
const imagenes = document.querySelectorAll('img');
//Cambiar color de texto y fondo de los parrafos
//Seleccionar todos los parrafos
const parrafos = document.querySelectorAll('p');
//Cambiar color de fondo
//Seleccionar articles y section
const articles = document.querySelectorAll('article');
const sections = document.querySelectorAll('section');


//Utilizo forEach para recorrer todos los enlaces
enlaces.forEach(e =>{
    e.addEventListener('click', enlace =>{//Evento de click
        enlace.preventDefault();//Evitar comportamiento
    });
});

imagenes.forEach(e =>{
    e.addEventListener('click', () =>{
        let random = Math.floor(Math.random() * (5) + 1)
        e.removeAttribute('src');
        for(let i = random; i<6;i++){
            e.setAttribute('src', `./assets/magic-${random}.gif`)
        } 
    })
})

parrafos.forEach(e =>{
    e.addEventListener('click', () =>{
        e.setAttribute("style", `color:${getRandom(colors)}; background:${getRandom(colors)}`)
    })
})

articles.forEach(e =>{
    e.addEventListener('click', () =>{
        e.setAttribute("style", `background:${getRandom(colors)}`)
    })
})
sections.forEach(e =>{
    e.addEventListener('click', () =>{
        e.setAttribute("style", `background:${getRandom(colors)}`)
    })
})

imagenes.forEach(e =>{
    let imagenOriginal;
    e.addEventListener("mouseenter", event =>{
        imagenOriginal = event.target.src;
        e.setAttribute('src', './assets/abracadabra.gif')
    })
    e.addEventListener('mouseleave', ()=>{
        e.setAttribute('src', imagenOriginal)
    }) 
})
parrafos.forEach(e =>{
    let colorOriginal;
    e.addEventListener("mouseenter", event =>{
        colorOriginal = event.target.color;
        e.setAttribute("style", `color:${getRandom(colors)}; background:${getRandom(colors)}`)
    })
    e.addEventListener('mouseleave', ()=>{
        e.setAttribute('style', colorOriginal)
    }) 
})

articles.forEach(e =>{
    let fondoOriginal;
    e.addEventListener("mouseenter", event =>{
        fondoOriginal = event.target.background;
        e.setAttribute("style", `background:${getRandom(colors)}`)
    })
    e.addEventListener('mouseleave', ()=>{
        e.setAttribute('style', fondoOriginal)
    }) 
})
sections.forEach(e =>{
    let fondoOriginal;
    e.addEventListener("mouseenter", event =>{
        fondoOriginal = event.target.background;
        e.setAttribute("style", `background:${getRandom(colors)}`)
    })
    e.addEventListener('mouseleave', ()=>{
        e.setAttribute('style', fondoOriginal)
    }) 
})
const colors = ['#3f1b53', '#cfc4c6', '#c012a2', '#de7aaf', '#4fc0de', '#8a8a8d'];

const getRandom = (colors) =>{
    let colorAleatorio = colors[Math.floor(Math.random() * colors.length)];
    return colorAleatorio;
}
console.log(getRandom(colors));








