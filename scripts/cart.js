// Функция отображения товаров корзины
function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.querySelector('.cart-list');
    const totalSumElem = document.getElementById("total-sum");
    container.innerHTML = "";

    let totalSum = 0;

    cart.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("cart-item");

        const priceNumber = parseInt(product.price.replace(/\D/g, ""));
        totalSum += priceNumber;

        card.innerHTML = `
            <img src="${product.img}" alt="${product.title}" class="cart-img" />
            <div>
                <h3>${product.title}</h3>
                <p>${product.price}</p>
            </div>
        `;
        container.appendChild(card);
    });

    totalSumElem.textContent = totalSum.toLocaleString() + " сум";
}

// Очистить корзину
document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    renderCart();
});

// Перерисовать корзину при загрузке
renderCart();

// Модальное окно оформления
const checkoutBtn = document.getElementById("checkout");
const modal = document.getElementById("checkout-modal");
const closeModal = document.querySelector(".close");
const submitOrder = document.getElementById("submit-order");

// Открыть оформление заказа
checkoutBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Ваша корзина пуста.");
    } else {
        modal.style.display = "flex";
    }
});

// Закрыть модальное окно
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Отправка заказа на сервер
submitOrder.addEventListener("click", () => {
    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!name || !phone) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, cart })
    })
    .then(res => res.json())
    .then(data => {
        alert("Спасибо за заказ! Мы свяжемся с вами.");
        localStorage.removeItem("cart");
        modal.style.display = "none";
        renderCart(); // Перерисовать корзину после оформления
    })
    .catch(error => {
        console.error(error);
        alert("Произошла ошибка при отправке заказа.");
    });
});

// Закрытие модалки при клике вне окна
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
