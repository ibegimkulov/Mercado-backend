const products = [
  {
    title: "Смартфон Redmi Note 14",
    price: "2 500 000 сум",
    oldPrice: "2 000 000 сум",
    img: "images/Смартфон Redmi Note 14.jpg"
  },
  {
    title: "Мужские кроссовки для весны",
    price: "140 000 сум",
    oldPrice: "116 000 сум",
    img: "images/Мужские кроссовки для весны.jpg"
  },
  {
    title: "Наушники Marshall",
    price: "265 000 сум",
    oldPrice: "200 000 сум",
    img: "images/Наушники Marshall.jpg"
  }
];

const discountList = document.getElementById("discount-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "custom-card";
  card.innerHTML = `
    <img src="${product.img}" alt="${product.title}">
    <h3>${product.title}</h3>
    <div class="card-body">
      <p class="price">
        <span class="old-price">${product.oldPrice}</span> →
        <span class="new-price">${product.price}</span>
      </p>
      <button><span>В корзину</span></button>
    </div>
  `;
  discountList.appendChild(card);
});

card.addEventListener("click", (e) => {
    if (!e.target.closest("button")) {
      window.location.href = `product.html?id=${product.id}`;
    }
  });

  // ✅ Добавление в корзину
  const btn = card.querySelector(".add-to-cart");
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // отменяет переход по карточке
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину!");
  });

  container.appendChild(card);

