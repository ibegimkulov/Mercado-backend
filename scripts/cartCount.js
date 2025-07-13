function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const  cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

updateCartCount();