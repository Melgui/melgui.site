// script.js

let count = 0;
let intervalId = null;
let isLongPress = false;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const toggleThemeBtn = document.getElementById('toggleTheme');

// Actualiza el valor mostrado
function updateDisplay() {
  countDisplay.textContent = count;
}

// Incremento o decremento continuo
function startChangingValue(changeBy) {
  isLongPress = false; // Resetear flag
  intervalId = setTimeout(() => {
    isLongPress = true;
    intervalId = setInterval(() => {
      count += changeBy;
      updateDisplay();
    }, 100);
  }, 300);
}

// Detiene el incremento/decremento
function stopChangingValue(changeBy) {
  clearTimeout(intervalId);
  clearInterval(intervalId);
  intervalId = null;
  if (!isLongPress) {
    count += changeBy;
    updateDisplay();
  }
}

// Event listeners para click y mantener presionado
increaseBtn.addEventListener('mousedown', () => startChangingValue(1));
increaseBtn.addEventListener('mouseup', () => stopChangingValue(1));
increaseBtn.addEventListener('mouseleave', () => stopChangingValue(1));

decreaseBtn.addEventListener('mousedown', () => startChangingValue(-1));
decreaseBtn.addEventListener('mouseup', () => stopChangingValue(-1));
decreaseBtn.addEventListener('mouseleave', () => stopChangingValue(-1));

// Eventos touch para dispositivos móviles
increaseBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  startChangingValue(1);
});
increaseBtn.addEventListener('touchend', () => stopChangingValue(1));

decreaseBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  startChangingValue(-1);
});
decreaseBtn.addEventListener('touchend', () => stopChangingValue(-1));

// Event listener para el botón de tema
toggleThemeBtn.addEventListener('click', toggleTheme);

// Función para alternar entre temas
function toggleTheme() {
  // Cambiar el tema
  document.body.classList.toggle('night');
  toggleThemeBtn.classList.toggle('night');
  countDisplay.classList.toggle('night');
  increaseBtn.classList.toggle('night');
  decreaseBtn.classList.toggle('night');
  
  // Cambiar el icono según el tema
  if (document.body.classList.contains('night')) {
    toggleThemeBtn.textContent = "🌞"; // Sol para el día
  } else {
    toggleThemeBtn.textContent = "🌙"; // Luna para la noche
  }
}

// Prevenir zoom en botones (excepto el de tema)
document.addEventListener(
  'touchstart',
  function (e) {
    if (e.target.tagName.toLowerCase() === 'button' && e.target !== toggleThemeBtn) {
      e.preventDefault(); // Prevenir zoom
    }
  },
  { passive: false }
);
