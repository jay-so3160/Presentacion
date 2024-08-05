// CRUD
// Crear Leer Actualizar Borrar

// alert("Hola Mundo! <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Adriana Jacqueline Soto Cruz')
  .pauseFor(300)
  .deleteAll()
  .typeString('Cientifica Forense')
  .pauseFor(1000)
  .start();



let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
loop: true,
delay: 75,
});
  
  // Usar el punto es para llamar a una propiedad o a una acción del objeto.
  // Acciones se distinguen por los paréntesis ()
  typewriterFrase
    .pauseFor(2500)
    .typeString('...It just so happens we're facing today for the first time')
    .pauseFor(300)
    .deleteAll()
    .typeString('Seventeen')
    .pauseFor(1000)
    .start();