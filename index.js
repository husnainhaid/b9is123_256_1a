const API_URL = "https://refactored-computing-machine-r47pp6pxvj9ghprqp-5000.app.github.dev/products";

function loadProducts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      let html = "<table border='1'><tr><th>ID</th><th>Name</th><th>Price</th><th>Qty</th></tr>";
      data.forEach(p => {
        html += `<tr><td>${p.id}</td><td>${p.name}</td><td>${p.price}</td><td>${p.quantity}</td></tr>`;
      });
      html += "</table>";
      document.getElementById("output").innerHTML = html;
    });
}

function addProduct() {
  const newProduct = {
    id: document.getElementById("id").value,
    name: document.getElementById("name").value,
    price: parseFloat(document.getElementById("price").value),
    quantity: parseInt(document.getElementById("qty").value)
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct)
  })
  .then(() => loadProducts());
}
