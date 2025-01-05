let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const toggleThemeBtn = document.getElementById('toggleTheme');

increaseBtn.addEventListener('touchend', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('touchend', () => {
  count--;
  updateDisplay();
});

increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('night'); // Toggle the night class for body
  toggleThemeBtn.classList.toggle('night'); // Toggle night mode for the button
  countDisplay.classList.toggle('night'); // Toggle night color for count display

  // Change the button text between moon and sun
  if (document.body.classList.contains('night')) {
    toggleThemeBtn.textContent = "🌞"; // Sun icon for day
  } else {
    toggleThemeBtn.textContent = "🌙"; // Moon icon for night
  }
});

function updateDisplay() {
  countDisplay.textContent = count;
}

document.addEventListener('touchstart', function (e) {
  if (e.target.tagName.toLowerCase() === 'button') {
    e.preventDefault(); // Prevent zooming when tapping buttons
  }
}, { passive: false });
