const products = [
  {title: "Айфон 16", price: "10 000 000 сум", img: "images/iPhone16.jpg", category: "tech"},
  {title: "Airpods Pro", price: "300 000 сум", img: "images/airpodspro.jpg", category: "tech"},
  {title: "Женские кроссовки NB 2002R", price: "450 000 сум", img: "images/NB 2002R.jpg" ,category: "shoes"},
  {title: "CROCS 207988", price: "800 000 сум", img: "images/CROCS 207988.jpg", category: "shoes"},
  {title: "Электроскутер Bonvi 2210", price: "4 000 000 сум", img: "images/Электроскутер Bonvi 2210.jpg", category: "tech"},
  {title: "Колонка ZQS 8221", price: "800 000 сум", img: "images/ZQS 8221.jpg", category: "tech"},
  {title: "Стиральная машина LG F2V5PS2S, 8 кг", price: "5 000 000 сум", img: "images/Стиральная машина LG F2V5PS2S.jpg", category: "tech"},
   {title: "Газовая плита L280", price: "3 000 000 сум", img: "images/Газовая плита L280.jpg", category: "tech"},
  {title: "Бутылка для воды со вкусом Air Up", price: "140 000 сум", img: "images/Бутылка для воды со вкусом Air Up.jpg", category: "accessories"},
  {title: "Чехол iPhone", price: "50 000 сум", img: "images/Чехол iPhone.jpg", category: "accessories"},
   {title: "Игровая клавиатура проводная K82", price: "235 000 сум", img: "images/Игровая клавиатура проводная K82.jpg", category: "tech"},
    {title: "Клавиатура T-Wolf TF770", price: "190 000 сум", img: "images/Клавиатура T-Wolf TF770.jpg", category: "tech"},
    {title: "Игровая клавиатура RGB", price: "170 000 сум", img: "images/Игровая клавиатура.jpg", category: "tech"},
    {title: "Механическая клавиатура AJAZZ AK820", price: "290 000 сум", img: "images/Механическая клавиатура AJAZZ AK820.jpg", category: "tech"},
    {title: "Беспроводные наушники Hoco W35 MAX", price: "155 000 сум", img: "images/Беспроводные наушники Hoco W35 MAX.jpg", category: "tech"},
    {title: "Джинсы женские мужские y2k", price: "155 000 сум", img: "images/Джинсы женские мужские y2k.jpg", category: "clothes"},
     {title: "Джинсы JNCO", price: "245 000 сум", img: "images/Джинсы JNCO.jpg", category: "clothes"},
     {title: "Женский лонгслив", price: "400 000 сум", img: "images/Женский лонгслив.jpg", category: "clothes"},
     {title: "Шорты женские мужские y2k", price: "490 000 сум", img: "images/shorty.jpg", category: "clothes"},
     {title: "Шорты женские y2k", price: "490 000 сум", img: "images/Шорты женские y2k.jpg", category: "clothes"},
     {title: "Футболки оверсайз женские Y2K", price: "550 000 сум", img: "images/Футболки оверсайз женские Y2K.jpg", category: "clothes"},
     {title: "Женская футболка оверсайз, с принтом", price: "530 000 сум", img: "images/Женская футболка оверсайз, с принтом.jpg", category: "clothes"},
     {title: "Топ винтажный Y2K стиль", price: "399 000 сум", img: "images/Топ винтажный Y2K стиль.jpg", category: "clothes"},
     {title: "Футболка  женская y2K", price: "399 000 сум", img: "images/Футболка  женская y2K.jpg", category: "clothes"},
     {title: "Футболки оверсайз женские Y2K", price: "399 000 сум", img: "images/Футболки оверсайз женские y22k.jpg", category: "clothes"},
     {title: "Украшения для девочек", price: "50 000 сум", img: "images/Украшения для девочек.jpg", category: "accessories"},
     {title: "Часы наручные, женские, квадратные", price: "120 000 сум", img: "images/Часы наручные, женские, квадратные.jpg", category: "accessories"},
     {title: "Женское кольцо", price: "60 000 сум", img: "images/Женское кольцо.jpg", category: "accessories"},
     {title: "Женский браслет", price: "70 000 сум", img: "images/Женский браслет.jpg", category: "accessories"},
      {title: "Коллекция украшений", price: "75 000 сум", img: "images/Коллекция украшений.jpg", category: "accessories"},
      {title: "Браслет для женщин", price: "65 000 сум", img: "images/Браслет для женщин.jpg", category: "accessories"},
      {title: "Сумка женская", price: "65 000 сум", img: "images/Сумка женская.jpg", category: "accessories"},
      {title: "Женская сумка шоппер с принтами", price: "80 000 сум", img: "images/Женская сумка шоппер с принтами.jpg", category: "accessories"},
      {title: "Женские солнцезащитные очки", price: "45 000 сум", img: "images/Женские солнцезащитные очки.jpg", category: "accessories"},
      {title: "Сумка женская", price: "45 000 сум", img: "images/Сумка женскаяя.jpg", category: "accessories"},
      {title: "Колье-чокер с розой", price: "55 000 сум", img: "images/Колье-чокер с розой.jpg", category: "accessories"},
      {title: "Ожерелье в виде бабочки", price: "39 000 сум", img: "images/Ожерелье в виде бабочки.jpg", category: "accessories"},
      {title: "Серьги для женщин", price: "49 000 сум", img: "images/Серьги для женщин.jpg", category: "accessories"},
      {title: "Мягкая игрушка брелок Labubu", price: "166 000 сум", img: "images/Мягкая игрушка брелок Labubu.jpg", category: "accessories"},
      {title: "Мужские кроссовки NIKE для весны и лета", price: "350 000 сум", img: "images/Мужские кроссовки NIKE для весны и лета.jpg", category:"shoes"},
      {title: "Кроссовки NIKE SB DUNK LOW", price: "450 000 сум", img: "images/Кроссовки NIKE SB DUNK LOW.jpg", category:"shoes"},
      {title: "Кроссовки NIKE SB DUNK LOW Junior", price: "455 000 сум", img: "images/Кроссовки NIKE SB DUNK LOW Junior.jpg", category:"shoes"},
      {title: "Кроссовки NIKE SB DUNK LOW Junior, спортивные", price: "455 000 сум", img: "images/Кроссовки NIKE SB DUNK LOW Junior, спортивные.jpg", category:"shoes"},
      {title: "Мужские, женские, подростковые кроссовки Nike SB", price: "555 000 сум", img: "images/Мужские, женские, подростковые кроссовки Nike SB.jpg", category:"shoes"},
      {title: "Мужские, женские, подростковые кроссовки Nike SB", price: "555 000 сум", img: "images/Мужские, женские, подростковые кроссовки Nike SB, размеры 39 - 44.jpg", category:"shoes"},
      {title: "кроссовки Nike SB", price: "555 000 сум", img: "images/кроссовки Nike SB.jpg", category:"shoes"},
      {title: "Кеды мужские Christian Louboutin", price: "666 000 сум", img: "images/Кеды мужские Christian Louboutin.jpg", category:"shoes"},
  // ...добавь столько товаров, сколько хочешь
];

const container = document.querySelector('.product-list');
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get("type");

// фильтруем по категории если параметр есть
const filteredProducts = categoryParam 
  ? products.filter(p => p.category === categoryParam)
  : products;

filteredProducts.forEach((product, index) => {
  const card = document.createElement("div");
  card.classList.add("custom-card");

  card.innerHTML = `
    <img src="${product.img}" alt="${product.title}" class="product-img" />
    <h3>${product.title}</h3>
    <div class="card-body">
      ${product.oldPrice ? `<p class="old-price"><s>${product.oldPrice}</s></p>` : ""}
      <p class="price">${product.price}</p>
      <button class="add-to-cart"><span>В корзину</span></button>
    </div>
  `;

  // переход на product.html
  card.addEventListener("click", (e) => {
    if (!e.target.closest("button")) {
      window.location.href = `product.html?id=${index}`;
    }
  });

  // добавление в корзину
  card.querySelector(".add-to-cart").addEventListener("click", (e) => {
    e.stopPropagation();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Товар добавлен в корзину!");
  });

  container.appendChild(card);
});