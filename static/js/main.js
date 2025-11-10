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
    "icon": "https://m.media-amazon.com/images/I/71xpepHmE8L._UF1000,1000_QL80_.jpg",
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
    "icon": "https://m.media-amazon.com/images/I/61v88n1C0BL._UF1000,1000_QL80_.jpg",
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
    "icon": "https://www.bbassets.com/media/uploads/p/xl/126906_10-aashirvaad-atta-whole-wheat.jpg",
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
    "icon": "https://m.media-amazon.com/images/I/71d0wtpbxJL._UF1000,1000_QL80_.jpg",
    "rating": 4.4,
    "deliveryTime": "15-20 mins",
    "badge": "Healthy"
  },
  {
    "id": 5,
    "name": "Poha (Flattened Rice) 500g",
    "category": "grains",
    "price": 2.11,
    "description": "Thin poha - 500g pack",
    "icon": "https://m.media-amazon.com/images/I/71-UdPrt2+S.jpg",
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
    "icon": "https://shop.mtrfoods.com/cdn/shop/products/1_662f5af2-c3d1-4cf2-9b9c-fd158331988f_large.jpg?v=1742559617",
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
    "icon": "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/7/9/2e4df251-4098-4a61-a598-f72765d8ea62_pulsesandothergrains_5ZTGLLCSGX_MN.jpg",
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
    "icon": "https://5.imimg.com/data5/ECOM/Default/2023/9/346778213/KP/GM/LH/193735306/maggi-1689332805231-sku-1624-0-500x500.jpeg",
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
    "icon": "https://images.apollo247.in/pub/media/catalog/product/K/E/KEL0087_1_2.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
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
    "icon": "https://rukminim2.flixcart.com/image/704/844/xif0q/grain-millet/1/r/o/-original-imah9jpfjpyjgcjx.jpeg?q=90&crop=false",
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
    "icon": "https://static.wixstatic.com/media/31a0fa_9b146efcd4b74c738c8795db339f0454~mv2.webp/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/31a0fa_9b146efcd4b74c738c8795db339f0454~mv2.webp",
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
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYEexDjY42LGEWv_Ykyp7PnBmybrjPZO5RA&s",
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
    "icon": "https://cdn.grofers.com/da/cms-assets/cms/product/eab5685e-e52e-457e-8536-e04ce0a46b04.jpg",
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
    "icon": "https://www.licious.in/blog/wp-content/uploads/2022/01/eggs-1.jpg",
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
    "icon": "https://m.media-amazon.com/images/I/51ebZJ+DR4L._UF1000,1000_QL80_.jpg",
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
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJa6G2sFzRt2c_4DljZUMKfK8sMOFV-E8F_A&s",
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
    "icon": "https://ik.imagekit.io/wlfr/wellness/images/products/372460-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end",
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
    "icon": "https://m.media-amazon.com/images/I/61Xph7Wux9L.jpg",
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
    "icon": "https://m.media-amazon.com/images/I/91n6v6KY-6L._AC_SL1500_.jpg",
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
    "icon": "https://www.coca-cola.com/content/dam/onexp/us/en/brands/simply/orange-/packshots/simply-orange-high-pulp.png",
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
    "icon": "https://cdn.shopaccino.com/edible-smart/products/toor-dal-min-scaled-740285_l.jpg?v=587",
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
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fhjfG16vqu9CzSVAuuC6wwZa0MjwBl6zfA&s",
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
  const heroSearch = document.getElementById("heroSearch");
  const navSearch = document.getElementById("navSearch");
  const heroSection = document.getElementById("heroSection");
  const categoriesSection = document.getElementById("categoriesSection");
  const noResults = document.getElementById("noResults");
  
  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    // Only hide sections if there's a search term
    if (searchTerm) {
      if (heroSection) heroSection.style.display = "none";
      if (categoriesSection) categoriesSection.style.display = "none";
      
      // Show no results message if needed
      if (noResults) {
        noResults.style.display = filteredProducts.length === 0 ? "block" : "none";
      }
    } else {
      // Show sections when search is cleared
      if (heroSection) heroSection.style.display = "block";
      if (categoriesSection) categoriesSection.style.display = "block";
      if (noResults) noResults.style.display = "none";
    }
    
    displayProducts(filteredProducts);
  }

  // Add event listeners to both search inputs
  if (heroSearch) heroSearch.addEventListener("input", handleSearch);
  if (navSearch) navSearch.addEventListener("input", handleSearch);
  }

  function toggleSearch() {
    const searchInput = document.getElementById("navSearch");
    if (searchInput.classList.contains("d-none")) {
      searchInput.classList.remove("d-none");
      searchInput.focus();
    } else {
      searchInput.classList.add("d-none");
    }
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
    `Thanks for your order! Your order has been placed successfully.\n\nThis is a demo project created using the Django framework.`
  );

  // clear the cart after placing order
  cart = [];
  updateCartDisplay();
  displayProducts();
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
