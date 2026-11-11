
const products = [
  {
    name: "Espresso",
    category: "coffee",
    description: "Strong Italian coffee",
    price: "3.500 DT",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e76?w=600"
  },
  {
    name: "Cappuccino",
    category: "coffee",
    description: "Coffee with creamy milk foam",
    price: "5.000 DT",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600"
  },
  {
    name: "Iced Coffee",
    category: "drinks",
    description: "Cold and refreshing coffee",
    price: "7.000 DT",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
  },
  {
    name: "Fresh Orange Juice",
    category: "drinks",
    description: "Freshly squeezed orange juice",
    price: "6.000 DT",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600"
  },
  {
    name: "Club Sandwich",
    category: "food",
    description: "Chicken, cheese and fresh vegetables",
    price: "12.000 DT",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=600"
  },
  {
    name: "Cheeseburger",
    category: "food",
    description: "Beef burger with melted cheese",
    price: "15.000 DT",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
  },
  {
    name: "Chocolate Cake",
    category: "desserts",
    description: "Rich chocolate cake",
    price: "8.000 DT",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
  },
  {
    name: "Cheesecake",
    category: "desserts",
    description: "Creamy classic cheesecake",
    price: "9.000 DT",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600"
  }
];

const menu = document.getElementById("menu");

function displayProducts(items) {
  menu.innerHTML = "";

  items.forEach(product => {
    menu.innerHTML += `
      <article class="menu-item">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="item-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <span class="price">${product.price}</span>
        </div>
      </article>
    `;
  });
}

function showCategory(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(product => product.category === category);
    displayProducts(filtered);
  }
}

displayProducts(products);
