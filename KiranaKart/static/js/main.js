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

const img = (text) =>
  `https://dummyimage.com/256x256/eeeeee/111111.png&text=${encodeURIComponent(
    text
  )}`;

const products = [
  // 🌾 Grain-first (brand variations + mixed ratings)
  {
    id: 1,
    name: "Basmati Rice - India Gate",
    category: "grains",
    price: 120,
    description: "Premium long-grain basmati rice - 1kg pack",
    icon: img("India Gate Basmati 1kg"),
    rating: 4.6,
    deliveryTime: "20-25 mins",
    badge: "Premium",
  },
  {
    id: 2,
    name: "Basmati Rice - Fortune",
    category: "grains",
    price: 110,
    description: "High-quality basmati rice - 1kg pack",
    icon: img("Fortune Basmati 1kg"),
    rating: 3.8,
    deliveryTime: "20-25 mins",
    badge: "Budget",
  },
  {
    id: 3,
    name: "Basmati Rice - Daawat",
    category: "grains",
    price: 125,
    description: "Traditional aroma basmati rice - 1kg pack",
    icon: img("Daawat Basmati 1kg"),
    rating: 4.2,
    deliveryTime: "20-25 mins",
    badge: "Aromatic",
  },
  {
    id: 4,
    name: "Brown Rice - Organic Tattva",
    category: "grains",
    price: 130,
    description: "Organic brown rice - 1kg pack",
    icon: img("Organic Tattva Brown Rice"),
    rating: 4.2,
    deliveryTime: "20-25 mins",
    badge: "Organic",
  },
  {
    id: 5,
    name: "Brown Rice - 24 Mantra",
    category: "grains",
    price: 135,
    description: "Unpolished brown rice - 1kg pack",
    icon: img("24 Mantra Brown Rice 1kg"),
    rating: 3.7,
    deliveryTime: "20-25 mins",
    badge: "Healthy",
  },

  {
    id: 6,
    name: "Whole Wheat Flour - Aashirvaad 10kg",
    category: "grains",
    price: 250,
    description: "Whole wheat flour - 10kg pack",
    icon: img("Aashirvaad Atta 10kg"),
    rating: 4.5,
    deliveryTime: "20-25 mins",
    badge: "Popular",
  },
  {
    id: 7,
    name: "Whole Wheat Flour - Pillsbury 5kg",
    category: "grains",
    price: 160,
    description: "Chakki fresh atta - 5kg pack",
    icon: img("Pillsbury Atta 5kg"),
    rating: 4.0,
    deliveryTime: "20-25 mins",
    badge: "Fresh",
  },
  {
    id: 8,
    name: "Whole Wheat Flour - Local Brand 10kg",
    category: "grains",
    price: 220,
    description: "Stone-ground wheat flour - 10kg pack",
    icon: img("Local Atta 10kg"),
    rating: 3.6,
    deliveryTime: "20-25 mins",
    badge: "Budget",
  },

  {
    id: 9,
    name: "Rolled Oats - Quaker 1kg",
    category: "grains",
    price: 180,
    description: "Nutritious rolled oats - 1kg pack",
    icon: img("Quaker Oats 1kg"),
    rating: 4.4,
    deliveryTime: "15-20 mins",
    badge: "Healthy",
  },
  {
    id: 10,
    name: "Rolled Oats - Saffola 1kg",
    category: "grains",
    price: 150,
    description: "Instant oats - 1kg pack",
    icon: img("Saffola Oats 1kg"),
    rating: 3.9,
    deliveryTime: "15-20 mins",
    badge: "Quick",
  },
  {
    id: 11,
    name: "Rolled Oats - Bagrry's 1kg",
    category: "grains",
    price: 170,
    description: "High-fiber rolled oats - 1kg",
    icon: img("Bagrrys Oats 1kg"),
    rating: 4.1,
    deliveryTime: "15-20 mins",
    badge: "High Fiber",
  },

  {
    id: 12,
    name: "Poha (Flattened Rice) - Indori Special 500g",
    category: "grains",
    price: 45,
    description: "Thin poha - 500g pack",
    icon: img("Indori Poha 500g"),
    rating: 4.0,
    deliveryTime: "15-20 mins",
    badge: "Popular",
  },
  {
    id: 13,
    name: "Poha - Local Brand 500g",
    category: "grains",
    price: 40,
    description: "Budget poha - 500g pack",
    icon: img("Local Poha 500g"),
    rating: 3.5,
    deliveryTime: "15-20 mins",
    badge: "Budget",
  },
  {
    id: 14,
    name: "Poha - Rajwadi 1kg",
    category: "grains",
    price: 75,
    description: "Medium poha - 1kg pack",
    icon: img("Rajwadi Poha 1kg"),
    rating: 3.8,
    deliveryTime: "15-20 mins",
    badge: "Value",
  },

  {
    id: 15,
    name: "Semolina (Rava) - MTR 1kg",
    category: "grains",
    price: 55,
    description: "Fine semolina - 1kg pack",
    icon: img("MTR Rava 1kg"),
    rating: 4.1,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },
  {
    id: 16,
    name: "Semolina (Rava) - Bambino 1kg",
    category: "grains",
    price: 52,
    description: "Durum wheat rava - 1kg",
    icon: img("Bambino Rava 1kg"),
    rating: 3.7,
    deliveryTime: "15-20 mins",
    badge: "Value",
  },

  {
    id: 17,
    name: "Barley - Organic India 1kg",
    category: "grains",
    price: 85,
    description: "Barley grains - 1kg pack",
    icon: img("Organic India Barley 1kg"),
    rating: 4.2,
    deliveryTime: "15-20 mins",
    badge: "Healthy",
  },
  {
    id: 18,
    name: "Foxtail Millet - Organic 1kg",
    category: "grains",
    price: 130,
    description: "Organic foxtail millet - 1kg pack",
    icon: img("Foxtail Millet 1kg"),
    rating: 4.0,
    deliveryTime: "20-25 mins",
    badge: "Organic",
  },
  {
    id: 19,
    name: "Sorghum (Jowar) - Unpolished 1kg",
    category: "grains",
    price: 100,
    description: "Gluten-free jowar grains - 1kg",
    icon: img("Jowar 1kg"),
    rating: 4.1,
    deliveryTime: "20-25 mins",
    badge: "Gluten-free",
  },
  {
    id: 20,
    name: "Bajra (Pearl Millet) - 1kg",
    category: "grains",
    price: 95,
    description: "Pearl millet - 1kg pack",
    icon: img("Bajra 1kg"),
    rating: 3.6,
    deliveryTime: "20-25 mins",
    badge: "Hearty",
  },

  {
    id: 21,
    name: "Quinoa - Organic Harvest 500g",
    category: "grains",
    price: 250,
    description: "White quinoa - 500g pack",
    icon: img("Organic Quinoa 500g"),
    rating: 4.4,
    deliveryTime: "20-25 mins",
    badge: "Premium",
  },
  {
    id: 22,
    name: "Quinoa - Local 500g",
    category: "grains",
    price: 180,
    description: "Budget quinoa - 500g pack",
    icon: img("Local Quinoa 500g"),
    rating: 3.4,
    deliveryTime: "20-25 mins",
    badge: "Budget",
  },

  {
    id: 23,
    name: "Pasta - Barilla 500g",
    category: "grains",
    price: 90,
    description: "Durum wheat penne - 500g",
    icon: img("Barilla Pasta 500g"),
    rating: 4.5,
    deliveryTime: "15-20 mins",
    badge: "Premium",
  },
  {
    id: 24,
    name: "Pasta - Disano 500g",
    category: "grains",
    price: 70,
    description: "Penne pasta - 500g",
    icon: img("Disano Pasta 500g"),
    rating: 4.0,
    deliveryTime: "15-20 mins",
    badge: "Value",
  },
  {
    id: 25,
    name: "Pasta - Local Brand 500g",
    category: "grains",
    price: 60,
    description: "Budget pasta - 500g pack",
    icon: img("Local Pasta 500g"),
    rating: 3.3,
    deliveryTime: "15-20 mins",
    badge: "Budget",
  },

  {
    id: 26,
    name: "Noodles - Maggi 280g",
    category: "grains",
    price: 55,
    description: "Instant masala noodles - 280g",
    icon: img("Maggi Noodles 280g"),
    rating: 4.6,
    deliveryTime: "10-15 mins",
    badge: "Popular",
  },
  {
    id: 27,
    name: "Noodles - Yippee 280g",
    category: "grains",
    price: 50,
    description: "Instant noodles - 280g",
    icon: img("Yippee Noodles 280g"),
    rating: 4.1,
    deliveryTime: "10-15 mins",
    badge: "Popular",
  },
  {
    id: 28,
    name: "Noodles - Local Brand 200g",
    category: "grains",
    price: 40,
    description: "Instant noodles - 200g",
    icon: img("Local Noodles 200g"),
    rating: 3.4,
    deliveryTime: "10-15 mins",
    badge: "Budget",
  },

  {
    id: 29,
    name: "Cornflakes - Kellogg's 500g",
    category: "grains",
    price: 120,
    description: "Crunchy cornflakes - 500g pack",
    icon: img("Kelloggs Cornflakes 500g"),
    rating: 4.3,
    deliveryTime: "10-15 mins",
    badge: "Popular",
  },
  {
    id: 30,
    name: "Cornflakes - Local 500g",
    category: "grains",
    price: 90,
    description: "Budget cornflakes - 500g pack",
    icon: img("Local Cornflakes 500g"),
    rating: 3.6,
    deliveryTime: "10-15 mins",
    badge: "Budget",
  },

  {
    id: 31,
    name: "Dalia (Broken Wheat) - 1kg",
    category: "grains",
    price: 70,
    description: "Healthy broken wheat - 1kg pack",
    icon: img("Dalia 1kg"),
    rating: 4.0,
    deliveryTime: "15-20 mins",
    badge: "Healthy",
  },
  {
    id: 32,
    name: "Rice Flour - 1kg",
    category: "grains",
    price: 65,
    description: "Fine rice flour - 1kg pack",
    icon: img("Rice Flour 1kg"),
    rating: 3.8,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },
  {
    id: 33,
    name: "Maize Flour - 1kg",
    category: "grains",
    price: 60,
    description: "Fine maize flour - 1kg pack",
    icon: img("Maize Flour 1kg"),
    rating: 3.7,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },
  {
    id: 34,
    name: "Suji (Fine Semolina) - 1kg",
    category: "grains",
    price: 52,
    description: "Fine suji for upma/halwa - 1kg",
    icon: img("Suji 1kg"),
    rating: 3.5,
    deliveryTime: "15-20 mins",
    badge: "Value",
  },

  {
    id: 35,
    name: "Multigrain Bread - Britannia",
    category: "grains",
    price: 50,
    description: "Soft multigrain bread loaf",
    icon: img("Britannia Multigrain Bread"),
    rating: 4.2,
    deliveryTime: "10-15 mins",
    badge: "Fresh",
  },
  {
    id: 36,
    name: "Brown Bread - Modern",
    category: "grains",
    price: 35,
    description: "Healthy brown bread loaf",
    icon: img("Modern Brown Bread"),
    rating: 3.7,
    deliveryTime: "10-15 mins",
    badge: "Budget",
  },
  {
    id: 37,
    name: "White Bread - English Oven",
    category: "grains",
    price: 38,
    description: "Fresh white bread loaf",
    icon: img("English Oven White Bread"),
    rating: 4.1,
    deliveryTime: "10-15 mins",
    badge: "Fresh",
  },

  // 🥛 Dairy & Poultry
  {
    id: 38,
    name: "Milk - Amul 1L",
    category: "dairy",
    price: 60,
    description: "Fresh cow milk - 1 liter",
    icon: img("Amul Milk 1L"),
    rating: 4.5,
    deliveryTime: "10-15 mins",
    badge: "Pure",
  },
  {
    id: 39,
    name: "Milk - Local Dairy 1L",
    category: "dairy",
    price: 50,
    description: "Toned milk - 1 liter",
    icon: img("Local Milk 1L"),
    rating: 3.8,
    deliveryTime: "10-15 mins",
    badge: "Budget",
  },
  {
    id: 40,
    name: "Curd - Amul 500g",
    category: "dairy",
    price: 45,
    description: "Fresh dahi - 500g",
    icon: img("Amul Curd 500g"),
    rating: 4.2,
    deliveryTime: "10-15 mins",
    badge: "Fresh",
  },
  {
    id: 41,
    name: "Butter - Amul 500g",
    category: "dairy",
    price: 80,
    description: "Creamy butter - 500g pack",
    icon: img("Amul Butter 500g"),
    rating: 4.6,
    deliveryTime: "15-20 mins",
    badge: "Creamy",
  },
  {
    id: 42,
    name: "Cheddar Cheese - Britannia 200g",
    category: "dairy",
    price: 200,
    description: "Cheddar cheese block - 200g",
    icon: img("Britannia Cheese 200g"),
    rating: 4.4,
    deliveryTime: "20-25 mins",
    badge: "Premium",
  },
  {
    id: 43,
    name: "Paneer - Local 200g",
    category: "dairy",
    price: 75,
    description: "Fresh paneer - 200g",
    icon: img("Local Paneer 200g"),
    rating: 3.6,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },

  {
    id: 44,
    name: "Eggs - Farm Fresh (12)",
    category: "poultry",
    price: 70,
    description: "Pack of 12 eggs",
    icon: img("Eggs 12 Farm Fresh"),
    rating: 4.4,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },
  {
    id: 45,
    name: "Eggs - Local (12)",
    category: "poultry",
    price: 60,
    description: "12 eggs - local vendor",
    icon: img("Eggs 12 Local"),
    rating: 3.7,
    deliveryTime: "15-20 mins",
    badge: "Budget",
  },

  // 🍎 Fruits & Veggies
  {
    id: 46,
    name: "Bananas Premium (1 dozen)",
    category: "fruits",
    price: 55,
    description: "Fresh bananas - 1 dozen",
    icon: img("Bananas Premium"),
    rating: 4.0,
    deliveryTime: "15-20 mins",
    badge: "Organic",
  },
  {
    id: 47,
    name: "Bananas Budget (1 dozen)",
    category: "fruits",
    price: 40,
    description: "Budget bananas - 1 dozen",
    icon: img("Bananas Budget"),
    rating: 3.5,
    deliveryTime: "15-20 mins",
    badge: "Budget",
  },
  {
    id: 48,
    name: "Apples - Kashmir 1kg",
    category: "fruits",
    price: 150,
    description: "Kashmiri red apples - 1kg",
    icon: img("Kashmir Apples 1kg"),
    rating: 4.5,
    deliveryTime: "15-20 mins",
    badge: "Premium",
  },
  {
    id: 49,
    name: "Oranges 1kg",
    category: "fruits",
    price: 120,
    description: "Fresh and juicy oranges - 1kg",
    icon: img("Oranges 1kg"),
    rating: 4.1,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },
  {
    id: 50,
    name: "Grapes - Green 500g",
    category: "fruits",
    price: 90,
    description: "Sweet green grapes - 500g",
    icon: img("Green Grapes 500g"),
    rating: 3.9,
    deliveryTime: "15-20 mins",
    badge: "Seasonal",
  },

  {
    id: 51,
    name: "Tomatoes 1kg",
    category: "vegetables",
    price: 40,
    description: "Fresh tomatoes - 1kg",
    icon: img("Tomatoes 1kg"),
    rating: 4.2,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },
  {
    id: 52,
    name: "Tomatoes - Budget 1kg",
    category: "vegetables",
    price: 35,
    description: "Budget tomatoes - 1kg",
    icon: img("Tomatoes Budget 1kg"),
    rating: 3.6,
    deliveryTime: "15-20 mins",
    badge: "Budget",
  },
  {
    id: 53,
    name: "Onions 1kg",
    category: "vegetables",
    price: 30,
    description: "Red onions - 1kg",
    icon: img("Onions 1kg"),
    rating: 4.0,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },
  {
    id: 54,
    name: "Potatoes 1kg",
    category: "vegetables",
    price: 25,
    description: "Fresh potatoes - 1kg",
    icon: img("Potatoes 1kg"),
    rating: 4.1,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },
  {
    id: 55,
    name: "Green Peas 500g",
    category: "vegetables",
    price: 70,
    description: "Frozen green peas - 500g",
    icon: img("Green Peas 500g"),
    rating: 3.8,
    deliveryTime: "15-20 mins",
    badge: "Frozen",
  },

  // 🍿 Snacks & Beverages
  {
    id: 56,
    name: "Chips - Lay's Classic",
    category: "snacks",
    price: 30,
    description: "Classic salted potato chips",
    icon: img("Lays Classic"),
    rating: 4.3,
    deliveryTime: "10-15 mins",
    badge: "Popular",
  },
  {
    id: 57,
    name: "Chips - Local Salted",
    category: "snacks",
    price: 20,
    description: "Budget salted chips",
    icon: img("Local Chips Salted"),
    rating: 3.2,
    deliveryTime: "10-15 mins",
    badge: "Budget",
  },
  {
    id: 58,
    name: "Chocolate Biscuits - Dark",
    category: "snacks",
    price: 45,
    description: "Chocolate cream biscuits",
    icon: img("Choco Biscuits Dark"),
    rating: 4.5,
    deliveryTime: "10-15 mins",
    badge: "Popular",
  },
  {
    id: 59,
    name: "Biscuits - Glucose",
    category: "snacks",
    price: 30,
    description: "Simple glucose biscuits",
    icon: img("Glucose Biscuits"),
    rating: 3.6,
    deliveryTime: "10-15 mins",
    badge: "Budget",
  },
  {
    id: 60,
    name: "Peanuts - Roasted 500g",
    category: "snacks",
    price: 60,
    description: "Roasted peanuts - 500g",
    icon: img("Roasted Peanuts 500g"),
    rating: 4.1,
    deliveryTime: "15-20 mins",
    badge: "Crunchy",
  },

  {
    id: 61,
    name: "Coca-Cola 750ml",
    category: "beverages",
    price: 40,
    description: "Chilled Coca-Cola - 750ml",
    icon: img("Coca-Cola 750ml"),
    rating: 4.2,
    deliveryTime: "10-15 mins",
    badge: "Popular",
  },
  {
    id: 62,
    name: "Cola - Local 500ml",
    category: "beverages",
    price: 25,
    description: "Local cola - 500ml",
    icon: img("Local Cola 500ml"),
    rating: 3.4,
    deliveryTime: "10-15 mins",
    badge: "Budget",
  },
  {
    id: 63,
    name: "Orange Juice 1L",
    category: "beverages",
    price: 90,
    description: "Refreshing orange juice - 1 liter",
    icon: img("Orange Juice 1L"),
    rating: 4.5,
    deliveryTime: "15-20 mins",
    badge: "Fresh",
  },
  {
    id: 64,
    name: "Mango Drink 600ml",
    category: "beverages",
    price: 35,
    description: "Mango flavored drink - 600ml",
    icon: img("Mango Drink 600ml"),
    rating: 3.7,
    deliveryTime: "10-15 mins",
    badge: "Seasonal",
  },

  // 🫘 Pulses
  {
    id: 65,
    name: "Toor Dal 1kg",
    category: "pulses",
    price: 140,
    description: "Arhar dal - 1kg",
    icon: img("Toor Dal 1kg"),
    rating: 4.2,
    deliveryTime: "20-25 mins",
    badge: "Protein",
  },
  {
    id: 66,
    name: "Moong Dal 1kg",
    category: "pulses",
    price: 130,
    description: "Split moong dal - 1kg",
    icon: img("Moong Dal 1kg"),
    rating: 3.9,
    deliveryTime: "20-25 mins",
    badge: "Light",
  },
  {
    id: 67,
    name: "Chana Dal 1kg",
    category: "pulses",
    price: 95,
    description: "Split bengal gram - 1kg",
    icon: img("Chana Dal 1kg"),
    rating: 3.7,
    deliveryTime: "20-25 mins",
    badge: "Value",
  },
  {
    id: 68,
    name: "Kabuli Chana 1kg",
    category: "pulses",
    price: 130,
    description: "Chickpeas - 1kg",
    icon: img("Kabuli Chana 1kg"),
    rating: 4.0,
    deliveryTime: "20-25 mins",
    badge: "Protein",
  },
];

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

  displayProducts(); // refresh UI
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
