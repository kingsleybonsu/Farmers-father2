const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const pageTitle = document.getElementById("pageTitle");

// GET CATEGORY FROM URL

const params = new URLSearchParams(window.location.search);

const category = params.get("category");

// PAGE TITLE

if(category === "Fruits"){
  pageTitle.innerText = "Fruits & Vegetables Market";
}

else if(category === "Tubers"){
  pageTitle.innerText = "Tubers & Cereals Market";
}

else if(category === "Livestock"){
  pageTitle.innerText = "Livestock Market";
}

// GET PRODUCTS

let products =
JSON.parse(localStorage.getItem("products")) || [];

// FILTER PRODUCTS

let filteredProducts = products.filter(product =>
  product.category === category
);

// DISPLAY PRODUCTS

function displayProducts(items){

  container.innerHTML = "";

  if(items.length === 0){

    container.innerHTML = `
      <div class="empty">

        <h2>No products found</h2>

        <p>
          No farmer has uploaded products yet.
        </p>

      </div>
    `;

    return;
  }

  items.forEach(product => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `

      <img
        src="${product.image || 'https://via.placeholder.com/400'}"
      >

      <div class="card-content">

        <span class="category">
          ${product.category}
        </span>

        <h3>${product.name}</h3>

        <p>
          👨‍🌾 ${product.farmer}
        </p>

        <p>
          📍 ${product.location}
        </p>

        <p>
          📦 ${product.quantity}
        </p>

        <div class="price">
          ${product.price || "Price Not Available"}
        </div>

        <div class="actions">

          <a
            href="tel:${product.phone}"
            class="btn call"
          >
            📞 Call
          </a>

          <a
            href="https://wa.me/${product.phone}?text=Hello I want to buy your ${product.name}"
            target="_blank"
            class="btn whatsapp"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>
    `;

    container.appendChild(card);

  });

}

// SEARCH

searchInput.addEventListener("keyup", () => {

  const search =
  searchInput.value.toLowerCase();

  const searchedProducts =
  filteredProducts.filter(product =>
    product.name.toLowerCase().includes(search)
  );

  displayProducts(searchedProducts);

});

// INITIAL DISPLAY

displayProducts(filteredProducts);