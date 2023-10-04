
function siguienteImagen() {
    const carrusel = document.querySelector(".inner");
    const imagenes = carrusel.querySelectorAll(".slider-body");
    const imagenActual = carrusel.querySelector(".img-show.slider-body");
    const siguienteImagen = imagenActual.nextElementSibling;

    if (!siguienteImagen) {
      siguienteImagen = imagenes[0];
    }
  
    imagenActual.classList.remove("img-show");
    imagenActual.classList.add("img-hidden");
    siguienteImagen.classList.add("img-show");

  }

  function anteriorImagen() {
    const carrusel = document.querySelector(".inner");
    const imagenes = carrusel.querySelectorAll(".slider-body");
    const imagenActual = carrusel.querySelector(".slider-body.img-show");
    const anteriorImagen = imagenActual.previousElementSibling;
  
    if (!anteriorImagen) {
      anteriorImagen = imagenes[imagenes.length - 1];
    }
  
    anteriorImagen.classList.add("img-show");
    imagenActual.classList.remove("img-show");
    imagenActual.classList.add("img-hidden");
  }
  
//   // Eventos
  
  document.querySelector(".siguiente").addEventListener("click", siguienteImagen);
  document.querySelector(".anterior").addEventListener("click", anteriorImagen);
  
  // Inicialización

  const imagenActual = document.querySelector(".slider-body:first-child");
  imagenActual.classList.add("img-show");