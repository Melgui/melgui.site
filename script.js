let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const toggleThemeBtn = document.getElementById('toggleTheme');

// Event listeners for increasing and decreasing the count
increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

// Event listener for theme toggle button
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('night');
  toggleThemeBtn.classList.toggle('night');
  countDisplay.classList.toggle('night');

  // Change the button text between moon and sun
  if (document.body.classList.contains('night')) {
    toggleThemeBtn.textContent = "🌞"; // Sun icon for day
  } else {
    toggleThemeBtn.textContent = "🌙"; // Moon icon for night
  }
});

// Update the count display
function updateDisplay() {
  countDisplay.textContent = count;
}

// Prevent zooming when tapping buttons on mobile
document.addEventListener('touchstart', function (e) {
  if (e.target.tagName.toLowerCase() === 'button') {
    e.preventDefault(); // Prevent zooming when tapping buttons
  }
}, { passive: false });
