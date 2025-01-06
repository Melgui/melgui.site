let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
let isNightMode = localStorage.getItem('isNightMode') === 'true';

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const toggleThemeBtn = document.getElementById('toggleTheme');
const resetCounterBtn = document.getElementById('resetCounter');
const backToHomeBtn = document.getElementById('homeBtn');

let intervalId = null;

// Actualiza el valor mostrado en la interfaz
function updateDisplay() {
  countDisplay.textContent = count;
  localStorage.setItem('count', count);
}

// Incremento o decremento continuo
function startChangingValue(changeBy) {
  if (intervalId) return;

  intervalId = setInterval(() => {
    count += changeBy;
    updateDisplay();
  }, 50); // Cambia el valor cada 50ms
}

function stopChangingValue() {
  clearInterval(intervalId);
  intervalId = null;
}

// Event listeners para incremento y decremento con click y táctil
function attachContinuousChangeEvents(button, changeBy) {
  // Ratón
  button.addEventListener('mousedown', () => startChangingValue(changeBy));
  button.addEventListener('mouseup', stopChangingValue);
  button.addEventListener('mouseleave', stopChangingValue);

  // Pantalla táctil
  button.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evitar zoom o scroll
    startChangingValue(changeBy);
  });
  button.addEventListener('touchend', stopChangingValue);
  button.addEventListener('touchcancel', stopChangingValue); // Cancelar si el toque es interrumpido
}

// Vincular eventos de cambio continuo a botones
attachContinuousChangeEvents(increaseBtn, 1);
attachContinuousChangeEvents(decreaseBtn, -1);

// Función para alternar entre los temas
function toggleTheme() {
  isNightMode = !isNightMode;

  if (isNightMode) {
    document.body.classList.add('night');
    toggleThemeBtn.classList.add('night');
    countDisplay.classList.add('night');
    toggleThemeBtn.textContent = "🌞"; // Modo noche, icono de sol
  } else {
    document.body.classList.remove('night');
    toggleThemeBtn.classList.remove('night');
    countDisplay.classList.remove('night');
    toggleThemeBtn.textContent = "🌙"; // Modo día, icono de luna
  }

  localStorage.setItem('isNightMode', isNightMode);
}

// Aplicar el tema al cargar la página
if (isNightMode) {
  document.body.classList.add('night');
  toggleThemeBtn.classList.add('night');
  countDisplay.classList.add('night');
  toggleThemeBtn.textContent = "🌞"; // Si está en modo noche, mostrar sol
}

updateDisplay();

// Volver a la página principal
backToHomeBtn.addEventListener('click', () => {
  window.location.href = '/'; // Redirigir a la página principal
});

// Restablecer contador a 0
resetCounterBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

toggleThemeBtn.addEventListener('click', toggleTheme);

// Prevenir zoom al hacer doble clic en toda la página
document.addEventListener('dblclick', (e) => {
  e.preventDefault(); // Evitar el zoom
});

// Deshabilitar zoom táctil con gestos (como pinch-to-zoom)
document.addEventListener('touchstart', (e) => {
  if (e.touches.length > 1) {
    e.preventDefault(); // Si hay más de un dedo, evitar comportamiento predeterminado
  }
}, { passive: false });

document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());
document.addEventListener('gestureend', (e) => e.preventDefault());
