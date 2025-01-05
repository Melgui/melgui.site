let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

// Add touchend listeners to make sure the buttons work well on mobile
increaseBtn.addEventListener('touchend', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('touchend', () => {
  count--;
  updateDisplay();
});

// Fallback to click event for desktops and non-touch devices
increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

// Update the display after every interaction
function updateDisplay() {
  countDisplay.textContent = count;
}

// Prevent zooming on touchstart but avoid interfering with the button events
document.addEventListener('touchstart', function (e) {
  if (e.target.tagName.toLowerCase() === 'button') {
    e.preventDefault(); // Prevent zooming when tapping buttons
  }
}, { passive: false });
