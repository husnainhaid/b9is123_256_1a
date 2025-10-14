class MyBox extends HTMLElement {
  constructor() {
    super();

    // Attach Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Create main box
    const box = document.createElement('div');
    box.className = 'box';
    box.innerHTML = `
      <p class="text">This is work</p>
      <button class="btn">Click Me</button>
    `;

    // Add styles inside the shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      .box {
        border: 2px solid #3a74ff;
        border-radius: 10px;
        background-color: #fefae0;
        padding: 30px;
        width: 220px;
        text-align: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        font-family: "Segoe UI", Arial, sans-serif;
      }
      .box:hover {
        transform: scale(1.03);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
      }
      .text {
        font-size: 18px;
        color: #333;
        margin-bottom: 15px;
        transition: font-weight 0.3s ease;
      }
      .btn {
        background-color: #2e8b57;
        border: none;
        color: white;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 14px;
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      .btn:hover {
        transform: scale(1.05);
      }
      .pulse {
        animation: pulse 0.2s ease;
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    `;

    // Append elements to shadow root
    shadow.append(style, box);

    // Select elements
    const text = box.querySelector('.text');
    const btn = box.querySelector('.btn');

    // Click action   change text and make bold
    btn.addEventListener('click', () => {
      const isHi = text.textContent === 'This is work';
      text.textContent = isHi ? 'All work done' : 'This is work';
      text.style.fontWeight = isHi ? 'bold' : 'normal';

      // Small click animation
      btn.classList.add('pulse');
      setTimeout(() => btn.classList.remove('pulse'), 200);
    });
  }
}

// Register custom element
customElements.define('my-box', MyBox);
