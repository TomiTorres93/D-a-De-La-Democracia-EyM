

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
const seccionelec3 = document.querySelector('.seccionelec3')
const seccionelec4 = document.querySelector('.seccionelec4')
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
const bvot1 = document.querySelector('#bvot1')
const bvot2 = document.querySelector('#bvot2')
const bvot3 = document.querySelector('#bvot3')
const bvot4 = document.querySelector('#bvot4')
const bvot5 = document.querySelector('#bvot5')
const bvot6 = document.querySelector('#bvot6')
const bvot7 = document.querySelector('#bvot7')
const bvot8 = document.querySelector('#bvot8')
const cvot1 = document.querySelector('#cvot1')
const cvot2 = document.querySelector('#cvot2')
const cvot3 = document.querySelector('#cvot3')
const cvot4 = document.querySelector('#cvot4')
const cvot5 = document.querySelector('#cvot5')
const cvot6 = document.querySelector('#cvot6')
const cvot7 = document.querySelector('#cvot7')
const cvot8 = document.querySelector('#cvot8')
const masboton2 = document.querySelector('#masboton2')
const masboton3 = document.querySelector('#masboton3')
const masboton4 = document.querySelector('#masboton4')

const id2 = document.querySelector('#id2')
masboton.addEventListener('click', function () {
  
    seccionelec1.classList.add('hidden')
    seccionelec2.classList.remove('hidden')

    setTimeout(function() {vot11.classList.remove('hidden')}, 600)
    setTimeout(function() {vot1.classList.remove('hidden')}, 1000)
    setTimeout(function() {vot2.classList.remove('hidden')}, 1200)
    setTimeout(function() {vot3.classList.remove('hidden')}, 1400)
    setTimeout(function() {vot4.classList.remove('hidden')}, 1600)
    setTimeout(function() {vot5.classList.remove('hidden')}, 1800)
    setTimeout(function() {vot6.classList.remove('hidden')}, 2000)
    setTimeout(function() {vot7.classList.remove('hidden')}, 2200)
    setTimeout(function() {vot6.classList.remove('hidden')}, 2400)
    setTimeout(function() {vot8.classList.remove('hidden')}, 2600)
    setTimeout(function() {vot9.classList.remove('hidden')}, 2800)
    setTimeout(function() {vot10.classList.remove('hidden')}, 3000)
    setTimeout(function() {vot11.classList.remove('hidden')}, 3200)
    setTimeout(function() {
        $("#masboton2").fadeIn(300)
        masboton2.classList.remove('hidden')}, 3500)
});

masboton2.addEventListener('click', function () {
    seccionelec3.classList.remove('hidden')
    seccionelec2.classList.add('hidden')
});


masboton2.addEventListener('click', function () {
  
    seccionelec2.classList.add('hidden')
    seccionelec3.classList.remove('hidden')
    setTimeout(function() {bvot7.classList.remove('hidden')}, 600)
    setTimeout(function() {bvot1.classList.remove('hidden')}, 1000)
    setTimeout(function() {bvot2.classList.remove('hidden')}, 1200)
    setTimeout(function() {bvot3.classList.remove('hidden')}, 1400)
    setTimeout(function() {bvot4.classList.remove('hidden')}, 1600)
    setTimeout(function() {bvot5.classList.remove('hidden')}, 1800)
    setTimeout(function() {bvot6.classList.remove('hidden')}, 2000)
    setTimeout(function() {bvot7.classList.remove('hidden')}, 2200)
    setTimeout(function() {$("#bvot8").fadeIn(300) 
    bvot8.classList.remove('hidden')}, 2600)
    setTimeout(function() {
        $("#masboton3").fadeIn(300)
        masboton3.classList.remove('hidden')}, 2800)
});

masboton3.addEventListener('click', function () {
    seccionelec3.classList.remove('hidden')
    seccionelec2.classList.add('hidden')
});



masboton3.addEventListener('click', function () {
  
    seccionelec3.classList.add('hidden')
    seccionelec4.classList.remove('hidden')
    setTimeout(function() {cvot7.classList.remove('hidden')}, 600)
    setTimeout(function() {cvot1.classList.remove('hidden')}, 1000)
    setTimeout(function() {cvot2.classList.remove('hidden')}, 1200)
    setTimeout(function() {cvot3.classList.remove('hidden')}, 1400)
    setTimeout(function() {cvot4.classList.remove('hidden')}, 1600)
    setTimeout(function() {cvot5.classList.remove('hidden')}, 1800)
    setTimeout(function() {cvot6.classList.remove('hidden')}, 2000)
    setTimeout(function() {cvot7.classList.remove('hidden')}, 2200)
    setTimeout(function() {$("#cvot8").fadeIn(300) 
    cvot8.classList.remove('hidden')}, 2600)
    setTimeout(function() {
        $("#masboton4").fadeIn(300)
        masboton4.classList.remove('hidden')}, 2800)
});

masboton4.addEventListener('click', function () {
    seccionelec4.classList.remove('hidden')
    seccionelec3.classList.add('hidden')
});

// TESTIMONIOS DE MADRES

const seccionmadres = document.querySelector('#seccionmadres')

const madres1 = document.querySelector('#madres1')
const madretest1 = document.querySelector('#madretest1')
const madretest1a = document.querySelector('#madretest1a')
const madretest1b = document.querySelector('#madretest1b')
const madretest1c = document.querySelector('#madretest1c')

const madres2 = document.querySelector('#madres2')
const madretest2 = document.querySelector('#madretest2')
const madretest2a = document.querySelector('#madretest2a')
const madretest2b = document.querySelector('#madretest2b')
const madretest2c = document.querySelector('#madretest2c')

const madres3 = document.querySelector('#madres3')
const madretest3 = document.querySelector('#madretest3')
const madretest3a = document.querySelector('#madretest3a')
const madretest3b = document.querySelector('#madretest3b')
const madretest3c = document.querySelector('#madretest3c')



console

madres1.addEventListener('click', function () {

    let madretest2check = madretest2.classList.contains('hidden')
    let madretest3check = madretest3.classList.contains('hidden')
    let seccionmadrescheck = seccionmadres.classList.contains('extraheight')

    console.log(seccionmadrescheck)
    console.log(madretest2check)
    console.log(madretest3check)

    if (seccionmadrescheck == false && madretest2check == true && madretest3check == true) {
        seccionmadres.classList.add('extraheight');
        seccionmadres.classList.remove('revextraheight');
    } else if (seccionmadrescheck == true && madretest2check == true && madretest3check == true) {
        seccionmadres.classList.add('revextraheight');
        seccionmadres.classList.remove('extraheight');
    }



    madres1.classList.toggle('panueloshadow')
    madretest1.classList.toggle('hidden')

    setTimeout(function() {$(
    "#madretest1a").fadeIn(500) 
    madretest1a.classList.toggle('hidden')
    $("#madretest1a").fadeIn(500) 
    madretest1b.classList.toggle('hidden')
    $("#madretest1a").fadeIn(500) 
    madretest1c.classList.toggle('hidden')}, 500)

    
    if (madretest2check == false || madretest3check == false) {
        madretest2.classList.toggle('hidden')
        madretest3.classList.toggle('hidden')
    }

    if (madretest2check == false || madretest3check == false) {
        madretest2.classList.remove('panueloshadow')
        madretest3.classList.remove('panueloshadow')

    }
});



madres2.addEventListener('click', function () {
    let madretest1check = madretest1.classList.contains('hidden')
    let madretest3check = madretest3.classList.contains('hidden')

    if (madretest1check == false || madretest3check == false) {
        madretest1.classList.toggle('hidden')
       madretest3.classList.toggle('hidden')
   }

   seccionmadres.classList.toggle('extraheight')
   seccionmadres.classList.toggle('revextraheight')

     madres2.classList.toggle('panueloshadow')
     madretest2.classList.toggle('hidden')
     setTimeout(function() {$("#madretest2a").fadeIn(300) 
     madretest2a.classList.remove('hidden')}, 100)
     setTimeout(function() {$("#madretest2a").fadeIn(300) 
     madretest2b.classList.remove('hidden')}, 300)
     setTimeout(function() {$("#madretest2a").fadeIn(300) 
     madretest2c.classList.remove('hidden')}, 500)
    



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

$(() => {

    $("#masboton2").click(() => {
    $("#fadeelec").fadeOut(500)
    $("#fadeelec").fadeIn(500)
    })
    
    for (i = 0; i < 100; i++) {
    $("#bvot7").fadeOut(400) 
    $("#bvot7").fadeIn(400)
    }  
})

$(() => {

    $("#masboton3").click(() => {
    $("#fadeelec").fadeOut(500)
    $("#fadeelec").fadeIn(500)
    })
    
    for (i = 0; i < 100; i++) {
    $("#cvot7").fadeOut(400) 
    $("#cvot7").fadeIn(400)
    }  
})



// setTimeout(function() {}, 100)