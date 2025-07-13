// Получаем параметр категории из URL
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get("type");

// Название категории
const categoryTitle = document.getElementById("category-title");
if (categoryTitle) {
  categoryTitle.textContent = {
    clothes: "Одежда",
    tech: "Техника",
    shoes: "Обувь",
    accessories: "Аксессуары"
  }[categoryParam] || "Категория";
}

// Находим контейнер
const container = document.querySelector('.product-list');
if (!container) {
  console.error("Контейнер .product-list не найден");
  // Прекращаем дальнейшее выполнение
  return;
}

// Фильтруем товары
const filtered = products.filter(p => p.category === categoryParam);

// Генерация карточек
filtered.forEach((product, index) => {
  const card = document.createElement("div");
  card.classList.add("custom-card");

  // Назначим ID, если его нет (лучше иметь уникальные ID заранее)
  product.id = product.id || `${categoryParam}-${index}`;

  card.innerHTML = `
    <img src="${product.img}" alt="${product.title}" class="product-img" />
    <h3>${product.title}</h3>
    <div class="card-body">
      ${product.oldPrice ? `<p class="old-price"><s>${product.oldPrice}</s></p>` : ""}
      <p class="price">${product.price}</p>
      <button class="add-to-cart">В корзину</button>
    </div>
  `;

  // Переход на страницу товара, если клик не по кнопке
  card.addEventListener("click", (e) => {
    if (!e.target.closest("button")) {
      window.location.href = `product.html?id=${product.id}`;
    }
  });

  // Добавление в корзину
  const btn = card.querySelector(".add-to-cart");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Проверяем, есть ли уже этот товар в корзине
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Если есть — увеличиваем количество
      cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
    } else {
      // Если нет — добавляем с количеством 1
      cart.push({...product, quantity: 1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину!");
  });

  container.appendChild(card);
});
