let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0; // Cargar el contador desde localStorage si existe
let isNightMode = localStorage.getItem('isNightMode') === 'true'; // Cargar el estado del tema desde localStorage

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const toggleThemeBtn = document.getElementById('toggleTheme');

let intervalId = null; // Variable para almacenar el intervalo

// Actualiza el valor mostrado en la interfaz
function updateDisplay() {
  countDisplay.textContent = count;
  localStorage.setItem('count', count); // Guardar el valor del contador en localStorage
}

// Incremento o decremento continuo
function startChangingValue(changeBy) {
  if (intervalId) return; // Evitar que se inicie otro intervalo si ya hay uno en ejecución

  intervalId = setInterval(() => {
    count += changeBy;
    updateDisplay();
  }, 50); // Cambiar cada 50ms (más rápido que antes)
}

// Detiene el incremento/decremento
function stopChangingValue() {
  clearInterval(intervalId);
  intervalId = null; // Limpiar el intervalo
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
  isNightMode = !isNightMode; // Cambiar el estado del tema

  // Aplicar los cambios de clase según el tema
  if (isNightMode) {
    document.body.classList.add('night');
    toggleThemeBtn.classList.add('night');
    countDisplay.classList.add('night');
    toggleThemeBtn.textContent = "🌞"; // Icono de sol para día
  } else {
    document.body.classList.remove('night');
    toggleThemeBtn.classList.remove('night');
    countDisplay.classList.remove('night');
    toggleThemeBtn.textContent = "🌙"; // Icono de luna para noche
  }

  // Guardar el estado del tema en localStorage
  localStorage.setItem('isNightMode', isNightMode);
}

// Cargar el estado inicial del tema
if (isNightMode) {
  toggleTheme(); // Activar el tema nocturno si está guardado en localStorage
}

// Inicializar el contador con el valor de localStorage
updateDisplay();

// Event listener para el botón de tema
toggleThemeBtn.addEventListener('click', toggleTheme);
