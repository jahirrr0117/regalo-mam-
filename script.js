/* CAMBIO DE PANTALLA */
function ir(numero) {
  document.querySelectorAll('.pantalla')
    .forEach(p => p.classList.remove('activa'));

  const destino = document.getElementById('p' + numero);
  if (destino) destino.classList.add('activa');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* CORAZONES */
setInterval(() => {
  const corazon = document.createElement('div');
  corazon.className = 'corazon';
  corazon.innerHTML = '💗';
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.fontSize = (14 + Math.random() * 18) + 'px';
  document.body.appendChild(corazon);

  setTimeout(() => corazon.remove(), 9000);
}, 700);

/* MÚSICA */
const musica = new Audio('musica.mp3');
musica.loop = true;
musica.volume = 0.35;

document.addEventListener('touchstart', () => {
  musica.play().catch(() => {});
}, { once: true });
