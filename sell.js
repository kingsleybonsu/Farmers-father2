const loggedIn =
localStorage.getItem("farmerLoggedIn");

if(!loggedIn){

  alert("Please login as farmer first");

  window.location.href =
  "farmer-register.html";

}


const form = document.getElementById("sellForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect values
  const product = {
    farmer: document.getElementById("farmer").value,
    name: document.getElementById("name").value,
    quantity: document.getElementById("quantity").value,
    location: document.getElementById("location").value,
    category: document.getElementById("category").value,
    phone: document.getElementById("phone").value,
    price: document.getElementById("price").value,
    date: document.getElementById("date").value,
    email: document.getElementById("email").value
  };

  // Get existing products
  let products = JSON.parse(localStorage.getItem("products")) || [];

  // Add new product
  products.push(product);

  // Save back to storage
  localStorage.setItem("products", JSON.stringify(products));

  alert("✅ Product added successfully!");

  form.reset();
});