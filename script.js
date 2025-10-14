// =========================================
// File: script.js
// Description:
//   Demonstrates JavaScript class inheritance,
//   constructor() and super() usage.
// =========================================

// Base class
class Template {
  constructor(title) {
    this.title = title;
  }

  greet() {
    console.log(`Welcome to ${this.title}!`);
  }
}

// Derived class using super()
class TemplateApp extends Template {
  constructor(title, version) {
    super(title); // call parent constructor
    this.version = version;
  }

  showInfo() {
    console.log(`${this.title} - Version ${this.version}`);
  }
}

// Example usage:
const app = new TemplateApp("Template Project", "1.0.0");
app.greet();
app.showInfo();

// Add interaction with HTML
document.getElementById("actionBtn").addEventListener("click", () => {
  alert(`You are using ${app.title} v${app.version}`);
});
