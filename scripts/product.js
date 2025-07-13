const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const container = document.getElementById("product-details");

const product = products.find(p => p.id === productId);

if (product) {
  container.innerHTML = `
    <div class="product-page">
      <div class="gallery">
        <div class="thumbnails">
          ${product.gallery.map(img => `<img src="${img}" class="thumb">`).join("")}
        </div>
        <img src="${product.gallery[0]}" class="main-img" id="main-img" />
      </div>

      <div class="product-info">
        <h1>${product.title}</h1>
        <p class="old-price"><s>${product.oldPrice}</s></p>
        <p class="new-price">${product.price}</p>

        <div class="options">
          <div class="colors">
            <label>Цвет:</label>
            ${product.colors.map(c => `<button class="option-btn">${c}</button>`).join("")}
          </div>
          <div class="sizes">
            <label>Размер:</label>
            ${product.sizes.map(s => `<button class="option-btn">${s}</button>`).join("")}
          </div>
        </div>

        <p class="description">${product.description}</p>

        <div class="actions">
          <button class="buy-now"><span>Купить в 1 клик</span></button>
          <button><span>Добавить в корзину</span></button>
        </div>
      </div>
    </div>
  `;

  document.querySelector('button span:contains("Добавить в корзину")')?.parentElement.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Товар добавлен в корзину!");
});


  // Обработчик галереи
  document.querySelectorAll('.thumb').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('main-img').src = img.src;
    });
  });
}

document.querySelectorAll('.buy-now').forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("quick-buy").style.display = "block";
  });
});

function submitQuickBuy() {
  alert("Заявка отправлена! Мы свяжемся с вами.");
  document.getElementById("quick-buy").style.display = "none";
}
