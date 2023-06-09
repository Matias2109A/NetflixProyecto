const fila = document.querySelector('.contenedor-carousel')
const peliculas = document.querySelectorAll('.pelicula')

const flechaIzquierda = document.getElementById('boton-izq')
const flechaDerecha = document.getElementById('boton-der')

//Event Listener para flecha der

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo')
        indicadorActivo.classList.remove('activo')
    }
})

//Event Listener para flecha izq

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo')
        indicadorActivo.classList.remove('activo')
    }
})


// Paginacion

const numeroPags = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPags; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo')
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

// Hover

peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        });
    })
});

fila.addEventListener('mouseleave', () =>{
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'))
})
















