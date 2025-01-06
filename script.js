let isNightMode = localStorage.getItem('isNightMode') === 'true';

const toggleThemeBtn = document.getElementById('toggleTheme');

// Función para alternar entre los temas
function toggleTheme() {
  isNightMode = !isNightMode;

  if (isNightMode) {
    document.body.classList.add('night');
    toggleThemeBtn.textContent = "🌞"; // Modo noche, ícono de sol
  } else {
    document.body.classList.remove('night');
    toggleThemeBtn.textContent = "🌙"; // Modo día, ícono de luna
  }

  localStorage.setItem('isNightMode', isNightMode);
}

// Aplicar el tema al cargar la página
if (isNightMode) {
  document.body.classList.add('night');
  toggleThemeBtn.textContent = "🌞"; // Si está en modo noche, mostrar el ícono de sol
}

toggleThemeBtn.addEventListener('click', toggleTheme);
