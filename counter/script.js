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
  }, 50);
}

function stopChangingValue() {
  clearInterval(intervalId);
  intervalId = null;
}

// Event listeners para click y mantener presionado
increaseBtn.addEventListener('mousedown', () => startChangingValue(1));
increaseBtn.addEventListener('mouseup', stopChangingValue);
increaseBtn.addEventListener('mouseleave', stopChangingValue);

decreaseBtn.addEventListener('mousedown', () => startChangingValue(-1));
decreaseBtn.addEventListener('mouseup', stopChangingValue);
decreaseBtn.addEventListener('mouseleave', stopChangingValue);

// Función para alternar entre los temas
function toggleTheme() {
  isNightMode = !isNightMode;

  if (isNightMode) {
    document.body.classList.add('night');
    toggleThemeBtn.classList.add('night');
    countDisplay.classList.add('night');
    toggleThemeBtn.textContent = "🌞";
  } else {
    document.body.classList.remove('night');
    toggleThemeBtn.classList.remove('night');
    countDisplay.classList.remove('night');
    toggleThemeBtn.textContent = "🌙";
  }

  localStorage.setItem('isNightMode', isNightMode);
}

// Aplicar el tema al cargar la página
if (isNightMode) {
  document.body.classList.add('night');
  toggleThemeBtn.classList.add('night');
  countDisplay.classList.add('night');
  toggleThemeBtn.textContent = "🌞"; // Si ya está en modo noche, mostrar el ícono de sol
}

// Volver a la página principal
backToHomeBtn.addEventListener('click', () => {
  window.location.href = '../index.html'; // Redirigir a la página principal
});

// Restablecer contador a 0
resetCounterBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

updateDisplay();

toggleThemeBtn.addEventListener('click', toggleTheme);
