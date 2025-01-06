import { renderHome } from './home.js';
import { renderCounter } from './counter.js';

function navigate(path) {
  const app = document.getElementById('app');
  app.innerHTML = '';

  if (path === '/counter') {
    renderCounter(app);
  } else {
    renderHome(app);
  }
}

window.onload = () => navigate('/');
window.onpopstate = () => navigate(window.location.pathname);

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('.button')) {
    event.preventDefault();
    const path = target.getAttribute('href');
    history.pushState(null, '', path);
    navigate(path);
  }
});