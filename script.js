let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const toggleThemeBtn = document.getElementById('toggleTheme');

// Event listeners for increasing and decreasing the count (for both touch and click)
increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

increaseBtn.addEventListener('touchend', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('touchend', () => {
  count--;
  updateDisplay();
});

// Event listener for the theme toggle button
toggleThemeBtn.addEventListener('click', toggleTheme);
toggleThemeBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Prevent default action on touch to avoid accidental zooming
  toggleTheme();
});

// Theme toggle function
function toggleTheme() {
  document.body.classList.toggle('night');
  toggleThemeBtn.classList.toggle('night');
  countDisplay.classList.toggle('night');

  if (document.body.classList.contains('night')) {
    toggleThemeBtn.textContent = "🌞"; // Sun icon for day
  } else {
    toggleThemeBtn.textContent = "🌙"; // Moon icon for night
  }
}

function updateDisplay() {
  countDisplay.textContent = count;
}

// Prevent zooming on button presses
document.addEventListener('touchstart', function (e) {
  if (e.target.tagName.toLowerCase() === 'button') {
    e.preventDefault(); // Prevent zooming when tapping buttons
  }
}, { passive: false });
