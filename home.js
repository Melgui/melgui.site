export function renderHome(container) {
    container.innerHTML = `
      <div id="home-container">
        <h1>Welcome to Melgui</h1>
        <h2>A collection of fun tools for your needs</h2>
        <hr />
        <div class="button-container">
          <a href="/counter" class="button">Counter Tool</a>
        </div>
      </div>
    `;
  }
  
  // counter.js
  export function renderCounter(container) {
    container.innerHTML = `
      <h1>Counter Tool</h1>
      <p>This is the counter tool. Coming soon!</p>
    `;
  }