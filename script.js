let isNightMode = localStorage.getItem('isNightMode') === 'true';
const countDisplay = document.getElementById('count');
const toggleThemeBtn = document.getElementById('toggleTheme');

// Función para alternar entre los temas
function toggleTheme() {
  document.body.classList.toggle('night');
  toggleThemeBtn.classList.toggle('night');
  countDisplay.classList.toggle('night');

  if (document.body.classList.contains('night')) {
    toggleThemeBtn.textContent = "🌞"; // Icono de sol para día
  } else {
    toggleThemeBtn.textContent = "🌙"; // Icono de luna para noche
  }

  localStorage.setItem('isNightMode', document.body.classList.contains('night'));
}

// Aplicar el tema al cargar la página
if (isNightMode) {
  document.body.classList.add('night');
  toggleThemeBtn.classList.add('night');
  countDisplay.classList.add('night');
  toggleThemeBtn.textContent = "🌞"; // Si ya está en modo noche, mostrar el ícono de sol
}

toggleThemeBtn.addEventListener('click', toggleTheme);

document.addEventListener('dblclick', function (e) {
  e.preventDefault(); // Evita el comportamiento de zoom.
});