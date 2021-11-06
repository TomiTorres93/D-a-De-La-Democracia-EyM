

//PREGUNTA 1

const respuestaIncorrecta1 = document.querySelector('.incorrecta1')
const respuestaIncorrecta2 = document.querySelector('.incorrecta2')
const respuestaIncorrecta3 = document.querySelector('.incorrecta3')
const respuestaCorrecta1 = document.querySelector('.correcta1')



respcolor.addEventListener('click', function () {
    respuestaIncorrecta1.classList.toggle('resp-incorrecta')
});

respcolor2.addEventListener('click', function () {
    respuestaIncorrecta2.classList.toggle('resp-incorrecta')
});

respcolor3.addEventListener('click', function () {
    respuestaCorrecta1.classList.toggle('resp-correcta')
});

respcolor4.addEventListener('click', function () {
    respuestaIncorrecta3.classList.toggle('resp-incorrecta')
});


// FUNCION ELECCIONES - Al hacer click en los botones se pasa a la siguiente información

const seccionelec1 = document.querySelector('.seccionelec1')
const seccionelec2 = document.querySelector('.seccionelec2')
const vot1 = document.querySelector('#vot1')
const vot2 = document.querySelector('#vot2')
const vot3 = document.querySelector('#vot3')
const vot4 = document.querySelector('#vot4')
const vot5 = document.querySelector('#vot5')
const vot6 = document.querySelector('#vot6')
const vot7 = document.querySelector('#vot7')
const vot8 = document.querySelector('#vot8')
const vot9 = document.querySelector('#vot9')
const vot10 = document.querySelector('#vot10')
const vot11 = document.querySelector('#vot11')





masboton.addEventListener('click', function () {
    
    
    seccionelec1.classList.add('hidden')
    seccionelec2.classList.remove('hidden')

    setTimeout(function() {
        vot11.classList.remove('hidden')
    }, 600)

    setTimeout(function() {
        vot1.classList.remove('hidden')
    }, 1000)

    setTimeout(function() {
        vot2.classList.remove('hidden')
    }, 1200)

    setTimeout(function() {
        vot3.classList.remove('hidden')
    }, 1400)

    setTimeout(function() {
        vot4.classList.remove('hidden')
    }, 1600)

    setTimeout(function() {
        vot5.classList.remove('hidden')
    }, 1800)

    setTimeout(function() {
        vot6.classList.remove('hidden')
    }, 2000)

    setTimeout(function() {
        vot7.classList.remove('hidden')
    }, 2200)


    setTimeout(function() {
        vot6.classList.remove('hidden')
    }, 2400)


    setTimeout(function() {
        vot8.classList.remove('hidden')
    }, 2600)


    setTimeout(function() {
        vot9.classList.remove('hidden')
    }, 2800)


    setTimeout(function() {
        vot10.classList.remove('hidden')
    }, 3000)


    setTimeout(function() {
        vot11.classList.remove('hidden')
    }, 3200)



});

masboton2.addEventListener('click', function () {
    seccionelec1.classList.remove('hidden')
    seccionelec2.classList.add('hidden')
});


//ANIMACIONES
$(() => {

    $("#masboton").click(() => {
    $("#fadeelec").fadeOut(500)
    $("#fadeelec").fadeIn(500)
        })

    
      for (i = 0; i < 100; i++) {
        $("#vot11").fadeOut(400) 
        $("#vot11").fadeIn(400)
      }  
})




// setTimeout(function() {}, 100)