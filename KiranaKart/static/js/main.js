// Sample product data
// 🍚
// 🌾
// 🥣
// 🍞
// 🍝
// 🍜
// 🥗
// 🥛
// 🧈
// 🥚
// 🍎
// 🍌
// 🍅
// 🥔
// 🍿
// 🍟
// 🥤
// 🧃
// 🍪
// 🥜
// {
//     id: 1,
//     name: "Basmati Rice - India Gate",
//     category: "grains",
//     price: 120,
//     description: "Premium long-grain basmati rice - 1kg pack",
//     icon: img("India Gate Basmati 1kg"),
//     rating: 4.6,
//     deliveryTime: "20-25 mins",
//     badge: "Premium",
//   },

const img = (text) =>
  `https://dummyimage.com/256x256/eeeeee/111111.png&text=${encodeURIComponent(
    text
  )}`;

const products = [
  // 🌾 Grain-first (brand variations + mixed ratings)
  {
    "id": 1,
    "name": "Basmati Rice - India Gate",
    "category": "grains",
    "price": 4.84,
    "description": "Premium long-grain basmati rice - 1kg pack",
    "icon": "https://images.unsplash.com/photo-1586200950769-96a147e054e1",
    "rating": 4.6,
    "deliveryTime": "20-25 mins",
    "badge": "Premium"
  },
  {
    "id": 2,
    "name": "Brown Rice - Organic Tattva",
    "category": "grains",
    "price": 5.16,
    "description": "Organic brown rice - 1kg pack",
    "icon": "https://images.unsplash.com/photo-1599508704512-2f19efd3e061",
    "rating": 4.2,
    "deliveryTime": "20-25 mins",
    "badge": "Organic"
  },
  {
    "id": 3,
    "name": "Whole Wheat Flour - Aashirvaad 10kg",
    "category": "grains",
    "price": 9.00,
    "description": "Whole wheat flour - 10kg pack",
    "icon": "https://images.unsplash.com/photo-1628779237756-0a404247863b",
    "rating": 4.5,
    "deliveryTime": "20-25 mins",
    "badge": "Popular"
  },
  {
    "id": 4,
    "name": "Rolled Oats - Quaker 1kg",
    "category": "grains",
    "price": 6.96,
    "description": "Nutritious rolled oats - 1kg pack",
    "icon": "https://images.unsplash.com/photo-1578403801937-3a7a6a3f0d7d",
    "rating": 4.4,
    "deliveryTime": "15-20 mins",
    "badge": "Healthy"
  },
  {
    "id": 5,
    "name": "Poha (Flattened Rice) - Indori Special 500g",
    "category": "grains",
    "price": 2.11,
    "description": "Thin poha - 500g pack",
    "icon": "https://images.unsplash.com/photo-1627308595250-2f46f19f7174",
    "rating": 4.0,
    "deliveryTime": "15-20 mins",
    "badge": "Popular"
  },
  {
    "id": 6,
    "name": "Semolina (Rava) - MTR 1kg",
    "category": "grains",
    "price": 2.49,
    "description": "Fine semolina - 1kg pack",
    "icon": "https://images.unsplash.com/photo-1627308595323-1b8a46a4a3b0",
    "rating": 4.1,
    "deliveryTime": "15-20 mins",
    "badge": "Fresh"
  },
  {
    "id": 7,
    "name": "Quinoa - Organic Harvest 500g",
    "category": "grains",
    "price": 9.00,
    "description": "White quinoa - 500g pack",
    "icon": "https://images.unsplash.com/photo-1589994329574-96a06b0f6b9e",
    "rating": 4.4,
    "deliveryTime": "20-25 mins",
    "badge": "Premium"
  },
  {
    "id": 8,
    "name": "Noodles - Maggi 280g",
    "category": "grains",
    "price": 2.49,
    "description": "Instant masala noodles - 280g",
    "icon": "https://images.unsplash.com/photo-1612929633738-8f7c1e8085b0",
    "rating": 4.6,
    "deliveryTime": "10-15 mins",
    "badge": "Popular"
  },
  {
    "id": 9,
    "name": "Cornflakes - Kellogg's 500g",
    "category": "grains",
    "price": 4.84,
    "description": "Crunchy cornflakes - 500g pack",
    "icon": "https://images.unsplash.com/photo-1599498687491-2e83c738b76a",
    "rating": 4.3,
    "deliveryTime": "10-15 mins",
    "badge": "Popular"
  },
  {
    "id": 10,
    "name": "Dalia (Broken Wheat) - 1kg",
    "category": "grains",
    "price": 2.87,
    "description": "Healthy broken wheat - 1kg pack",
    "icon": "https://images.unsplash.com/photo-1600107363560-a0a7bee4b025",
    "rating": 4.0,
    "deliveryTime": "15-20 mins",
    "badge": "Healthy"
  },
  {
    "id": 11,
    "name": "Milk - Amul 1L",
    "category": "dairy",
    "price": 2.53,
    "description": "Fresh cow milk - 1 liter",
    "icon": "https://images.unsplash.com/photo-1602434228300-a645b4f3689c",
    "rating": 4.5,
    "deliveryTime": "10-15 mins",
    "badge": "Pure"
  },
  {
    "id": 12,
    "name": "Curd - Amul 500g",
    "category": "dairy",
    "price": 2.11,
    "description": "Fresh dahi - 500g",
    "icon": "https://images.unsplash.com/photo-1584270558482-b1b63c0dc433",
    "rating": 4.2,
    "deliveryTime": "10-15 mins",
    "badge": "Fresh"
  },
  {
    "id": 13,
    "name": "Butter - Amul 500g",
    "category": "dairy",
    "price": 3.20,
    "description": "Creamy butter - 500g pack",
    "icon": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc7d",
    "rating": 4.6,
    "deliveryTime": "15-20 mins",
    "badge": "Creamy"
  },
  {
    "id": 14,
    "name": "Eggs - Farm Fresh (12)",
    "category": "poultry",
    "price": 2.87,
    "description": "Pack of 12 eggs",
    "icon": "https://images.unsplash.com/photo-1518562555075-7c91af6c8c39",
    "rating": 4.4,
    "deliveryTime": "15-20 mins",
    "badge": "Fresh"
  },
  {
    "id": 15,
    "name": "Bananas Premium (1 dozen)",
    "category": "fruits",
    "price": 2.49,
    "description": "Fresh bananas - 1 dozen",
    "icon": "https://images.unsplash.com/photo-1603833665858-e61d17a0f0c9",
    "rating": 4.0,
    "deliveryTime": "15-20 mins",
    "badge": "Organic"
  },
  {
    "id": 16,
    "name": "Apples - Kashmir 1kg",
    "category": "fruits",
    "price": 5.89,
    "description": "Kashmiri red apples - 1kg",
    "icon": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    "rating": 4.5,
    "deliveryTime": "15-20 mins",
    "badge": "Premium"
  },
  {
    "id": 17,
    "name": "Tomatoes 1kg",
    "category": "vegetables",
    "price": 1.96,
    "description": "Fresh tomatoes - 1kg",
    "icon": "https://images.unsplash.com/photo-1592928302638-84a9f7fb0d11",
    "rating": 4.2,
    "deliveryTime": "15-20 mins",
    "badge": "Fresh"
  },
  {
    "id": 18,
    "name": "Potatoes 1kg",
    "category": "vegetables",
    "price": 1.00,
    "description": "Fresh potatoes - 1kg",
    "icon": "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    "rating": 4.1,
    "deliveryTime": "15-20 mins",
    "badge": "Fresh"
  },
  {
    "id": 19,
    "name": "Chips - Lay's Classic",
    "category": "snacks",
    "price": 1.67,
    "description": "Classic salted potato chips",
    "icon": "https://images.unsplash.com/photo-1615497001839-b0a68a07e2d6",
    "rating": 4.3,
    "deliveryTime": "10-15 mins",
    "badge": "Popular"
  },
  {
    "id": 20,
    "name": "Chocolate Biscuits - Dark",
    "category": "snacks",
    "price": 2.11,
    "description": "Chocolate cream biscuits",
    "icon": "https://images.unsplash.com/photo-1606890737304-57d14433e2a6",
    "rating": 4.5,
    "deliveryTime": "10-15 mins",
    "badge": "Popular"
  },
  {
    "id": 21,
    "name": "Coca-Cola 750ml",
    "category": "beverages",
    "price": 1.96,
    "description": "Chilled Coca-Cola - 750ml",
    "icon": "https://images.unsplash.com/photo-1622483767028-3f66f32f7de7",
    "rating": 4.2,
    "deliveryTime": "10-15 mins",
    "badge": "Popular"
  },
  {
    "id": 22,
    "name": "Orange Juice 1L",
    "category": "beverages",
    "price": 3.56,
    "description": "Refreshing orange juice - 1 liter",
    "icon": "https://images.unsplash.com/photo-1600271886742-f049b37d44c9",
    "rating": 4.5,
    "deliveryTime": "15-20 mins",
    "badge": "Fresh"
  },
  {
    "id": 23,
    "name": "Toor Dal 1kg",
    "category": "pulses",
    "price": 5.49,
    "description": "Arhar dal - 1kg",
    "icon": "https://images.unsplash.com/photo-1600166898405-da8d7d9a5b57",
    "rating": 4.2,
    "deliveryTime": "20-25 mins",
    "badge": "Protein"
  },
  {
    "id": 24,
    "name": "Moong Dal 1kg",
    "category": "pulses",
    "price": 5.16,
    "description": "Split moong dal - 1kg",
    "icon": "https://images.unsplash.com/photo-1627308595322-4c9036e6b2b1",
    "rating": 3.9,
    "deliveryTime": "20-25 mins",
    "badge": "Light"
  }
]

let cart = [];
let currentCategory = "all";

/* APP INITIALIZATION */
// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  displayProducts();
  setupSearch();
});

/* PRODUCT DISPLAY FUNCTIONS */
function displayProducts(productsToShow = products) {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  productsToShow.forEach((product) => {
    const productCard = createProductCard(product);
    grid.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  card.innerHTML = `
    <div class="product-image">
        <img src="${product.icon}" alt="${
    product.name
  }" style="width:200px;height:180px;object-fit:contain;">
        <div class="product-badge">${product.badge}</div>
    </div>
    <div class="product-info">
                    <div class="product-header">
                        <div>
                            <div class="product-name">${product.name}</div>
                            <div style="font-size: 12px; color: #666;">${
                              product.deliveryTime
                            }</div>
                        </div>
                        <div class="product-rating">
                            ⭐ ${product.rating}
                        </div>
                    </div>
                    <div class="product-description">${
                      product.description
                    }</div>
                    <div class="product-footer">
                        <div class="product-price">₹${product.price}</div>
                        ${
                          quantity === 0
                            ? `<button class="add-btn" onclick="addToCart(${product.id})">ADD</button>`
                            : `<div class="quantity-controls">
                                <button class="qty-btn" onclick="decreaseQuantity(${product.id})">-</button>
                                <span class="qty-display">${quantity}</span>
                                <button class="qty-btn" onclick="increaseQuantity(${product.id})">+</button>
                            </div>`
                        }
                    </div>
                </div>
            `;

  return card;
}

function addToCart(productId) {
  if (!isLoggedIn) {
    alert("⚠️ Please login first to add items to your cart!");
    window.location.href = "/signin/";  // redirect to your login URL
    return;
  }

  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartDisplay(); // ✅ update navbar + cart sidebar immediately
  displayProducts();   // refresh UI if needed
  alert(`🛒 ${product.name} added to your cart!`);
}

function increaseQuantity(productId) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += 1;
    updateCartDisplay();
    displayProducts();
  }
}

function decreaseQuantity(productId) {
  const itemIndex = cart.findIndex((item) => item.id === productId);
  if (itemIndex !== -1) {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity -= 1;
    } else {
      cart.splice(itemIndex, 1);
    }
    updateCartDisplay();
    displayProducts();
  }
}

function updateCartDisplay() {
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const subtotal = document.getElementById("subtotal");
  const totalAmount = document.getElementById("totalAmount");

  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart items
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<div style="text-align: center; padding: 40px; color: #666;">Your cart is empty</div>';
  } else {
    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <div class="cart-item-price">₹${item.price} × ${item.quantity}</div>
                        </div>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
                        </div>
                    `;
      cartItems.appendChild(cartItem);
    });
  }

  subtotal.textContent = `₹${total}`;
  totalAmount.textContent = `₹${total + (total > 0 ? 25 : 0)}`;
}

/* CHECKOUT BUTTON HANDLER */
document.querySelector(".checkout-btn").addEventListener("click", function () {
  if (!isLoggedIn) {
    alert("⚠️ Please login first to place an order!");
    window.location.href = "/signin/";
  } else {
    let subtotal = 500; // example value, replace with your calculation
    let total = subtotal + 25;

    alert(
      `🎉 Order Placed Successfully!\n\nSubtotal: ₹${subtotal}\nDelivery: ₹25\nTotal: ₹${total}\n\nEstimated delivery: 20-30 minutes\n\nThis is a demo - in your Django app, this would process the actual payment and order!`
    );
  }
});

/* HELPERS */
function calculateSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function filterCategory(category) {
  currentCategory = category;

  // Update active category
  document.querySelectorAll(".category-card").forEach((card) => {
    card.classList.remove("active");
  });
  event.target.closest(".category-card").classList.add("active");

  // Filter products
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  displayProducts(filteredProducts);
}

function setupSearch() {
  const searchInput = document.getElementById("heroSearch");
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
  });
}

function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("overlay");

  cartSidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}

function checkout() {
  if (!isLoggedIn) {
    alert("⚠️ Please login first to place an order!");
    window.location.href = "/signin/"; // Redirect to Django login page
    return;
  }

  // ✅ User is logged in → proceed with order
  let subtotal = 0;
  const cartItems = document.querySelectorAll(".cart-item");
  cartItems.forEach((item) => {
    const price = parseInt(item.dataset.price || 0);
    const qty = parseInt(item.dataset.qty || 1);
    subtotal += price * qty;
  });

  const total = subtotal + 25;

  alert(
    `🎉 Order Placed Successfully!\n\nSubtotal: ₹${subtotal}\nDelivery: ₹25\nTotal: ₹${total}\n\nEstimated delivery: 20-30 minutes\n\nThis is a demo - in your Django app, this would process the actual payment and order!`
  );

  // clear the cart after placing order
  document.getElementById("cartItems").innerHTML = "";
  document.getElementById("subtotal").innerText = "₹0";
  document.getElementById("totalAmount").innerText = "₹25";
  document.getElementById("cartCount").innerText = "0";
}

// Filter tabs functionality
document.querySelectorAll(".filter-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".filter-tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    // You can add filtering logic here based on the tab clicked
    const filterType = this.textContent;
    console.log("Filter by:", filterType);
  });
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9759e206556f4226',t:'MTc1NjI4MDAyOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();

// Set copyright year automatically
document.getElementById("copyrightYear").textContent = new Date().getFullYear();
