function cambiarFondoSteamStyle(background, nuevoFondo) {
  const imgActual = background.querySelector("img");
  const imgNueva = document.createElement("img");
  imgNueva.src = nuevoFondo;
  imgNueva.style.opacity = 0;

  background.appendChild(imgNueva);


  void imgNueva.offsetWidth;

  imgNueva.style.opacity = 1;
  if (imgActual) imgActual.style.opacity = 0;


  imgNueva.addEventListener("transitionend", () => {
    if (imgActual) imgActual.remove();
  });
}


function cambiarFondoSteamStyle(background, nuevoFondo) {
  const imgActual = background.querySelector("img");
  const imgNueva = document.createElement("img");
  imgNueva.src = nuevoFondo;
  imgNueva.style.opacity = 0;

  background.appendChild(imgNueva);


  void imgNueva.offsetWidth;

 
  imgNueva.style.opacity = 1;
  if (imgActual) imgActual.style.opacity = 0;


  imgNueva.addEventListener("transitionend", () => {
    if (imgActual) imgActual.remove();
  });
}


function cargarJuego(gameSection, idx) {
  const juego = juegos[idx];
  const background = gameSection.querySelector('.background');


  cambiarFondoSteamStyle(background, juego.fondo);
  background.dataset.original = juego.fondo;


  gameSection.querySelector('.name p').textContent = juego.nombre;


  gameSection.querySelector('.text p').textContent = juego.texto;
  gameSection.querySelector('.text span').textContent = juego.etiqueta;


  gameSection.querySelector('.price p').textContent = juego.precio;


  const galeryDiv = gameSection.querySelector('.galery');
  galeryDiv.innerHTML = "";

  juego.galeria.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.width = 152;
    img.height = 68;
    galeryDiv.appendChild(img);

    
    img.addEventListener('mouseover', function() {
      cambiarFondoSteamStyle(background, img.src);
    });
  });

 
  galeryDiv.addEventListener('mouseleave', function() {
    cambiarFondoSteamStyle(background, background.dataset.original);
  });
}