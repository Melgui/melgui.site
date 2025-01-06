let count = 0;
let intervalId = null;
let isLongPress = false; // Indica si se está manteniendo presionado el botón

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
    isLongPress = true; // Si pasa el tiempo, es una pulsación larga
    intervalId = setInterval(() => {
      count += changeBy;
      updateDisplay();
    }, 100); // Cambia cada 100ms (puedes ajustarlo)
  }, 300); // Tiempo para activar el modo continuo
}

// Detiene el incremento/decremento
function stopChangingValue(changeBy) {
  clearTimeout(intervalId);
  clearInterval(intervalId);
  intervalId = null;
  if (!isLongPress) {
    // Si no fue una pulsación larga, cambiar solo una vez
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

// Eventos touch para dispositivos móviles (solo para incrementar y decrementar)
increaseBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Evita zoom solo en botones de +/-
  startChangingValue(1);
});
increaseBtn.addEventListener('touchend', () => stopChangingValue(1));

decreaseBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Evita zoom solo en botones de +/-
  startChangingValue(-1);
});
decreaseBtn.addEventListener('touchend', () => stopChangingValue(-1));

// Event listener para el botón de tema
toggleThemeBtn.addEventListener('click', toggleTheme);
toggleThemeBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Evita problemas táctiles en el botón de tema
  toggleTheme();
});

// Función para alternar entre temas
function toggleTheme() {
  document.body.classList.toggle('night');
  toggleThemeBtn.classList.toggle('night');
  countDisplay.classList.toggle('night');

  if (document.body.classList.contains('night')) {
    toggleThemeBtn.textContent = "🌞"; // Icono de sol para día
  } else {
    toggleThemeBtn.textContent = "🌙"; // Icono de luna para noche
  }
}

// Prevenir zoom en botones (general)
document.addEventListener(
  'touchstart',
  function (e) {
    if (e.target.tagName.toLowerCase() === 'button' && e.target !== toggleThemeBtn) {
      e.preventDefault(); // Prevenir zoom al tocar botones (excepto el de tema)
    }
  },
  { passive: false }
);
