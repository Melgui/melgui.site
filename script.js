let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;
}

document.addEventListener('touchstart', function (e) {
  if (e.target.tagName.toLowerCase() === 'button') {
    e.preventDefault(); // Prevent zooming when tapping buttons
  }
}, { passive: false });

