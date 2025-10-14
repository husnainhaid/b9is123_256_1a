#  Template Project

This repository provides a base **HTML + JavaScript template** for starting small projects quickly.  
It includes comments for clarity and demonstrates JavaScript `constructor()` and `super()` usage.

---

##  Files Overview

### `index.html`
- Contains the main page structure.
- Key sections:
  - `<!-- HEADER SECTION -->`: Displays title and intro.
  - `<!-- MAIN CONTENT -->`: Contains interactive content.
  - `<!-- FOOTER SECTION -->`: Footer info.
- Links to `script.js`.

### `script.js`
- Demonstrates OOP in JavaScript:
  - `Template` → Base class with a greeting method.
  - `TemplateApp` → Extends `Template` using `super()` in its constructor.
- Example instantiation:
  ```js
  const app = new TemplateApp("Template Project", "1.0.0");
  app.greet();
  app.showInfo();
