document.querySelectorAll('.game').forEach((gameSection, index) => {
  gameSection.dataset.index = 0; 
  cargarJuego(gameSection, 0);


  gameSection.querySelector('.right').addEventListener('click', () => {
    let pos = parseInt(gameSection.dataset.index);
    pos = (pos + 1) % juegos.length; 
    gameSection.dataset.index = pos;
    cargarJuego(gameSection, pos);
  });

  gameSection.querySelector('.left').addEventListener('click', () => {
    let pos = parseInt(gameSection.dataset.index);
    pos = (pos - 1 + juegos.length) % juegos.length; 
    gameSection.dataset.index = pos;
    cargarJuego(gameSection, pos);
  });
});