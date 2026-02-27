const corazon = document.getElementById("corazon");
const carta = document.getElementById("carta");
const galeria = document.getElementById("galeria");

corazon.addEventListener("click", () => {
    carta.style.display = "none";
    galeria.style.display = "block";
});
const musica = document.getElementById("musica");
document.addEventListener("click", () => {
  musica.muted = false;
  musica.volume = 0.4;
  musica.play(); // por si estaba pausada
}, { once: true });


window.onload = () => { // espera que todo el DOM + imágenes cargue
  const images = document.querySelectorAll('.heart-gallery img');

  // fuerza reflow
  images.forEach(img => img.getBoundingClientRect());

  images.forEach((img, index) => {
    setTimeout(() => {
      img.style.setProperty('--rot', (Math.random() * 10 - 5) + 'deg'); // rotación leve
      img.classList.add('show'); // activa opacity + scale
    }, index * 200); // retraso escalonado
  });
};
