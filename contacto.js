//  formulario de contacto
const formularioContacto = document.querySelector('.tarjeta-formulario form');

//  envío del formulario
formularioContacto.addEventListener('submit', function(e) {
  e.preventDefault(); // Evitamos que recargue la página

  //  datos básicos
  const mensajeContacto = {
    id: Date.now(),
    nombre: document.querySelector('#nombre').value,
    correo: document.querySelector('#correo').value,
    asunto: document.querySelector('#asunto').value,
    mensaje: document.querySelector('#mensaje').value
  };

  // Guardamos en el localStorage
  const listaMensajes = JSON.parse(localStorage.getItem('mensajes_contacto')) || [];
  listaMensajes.push(mensajeContacto);
  localStorage.setItem('mensajes_contacto', JSON.stringify(listaMensajes));

  // Confirmación al usuario
  alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
  formularioContacto.reset();
});