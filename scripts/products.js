const products = [
  { id: "accessories-1", title: "Игровая клавиатура проводная K82", price: "235 000 сум", img: "images/Игровая клавиатура проводная K82.jpg" },
  { id: "accessories-2", title: "Клавиатура T-Wolf TF770", price: "190 000 сум", img: "images/Клавиатура T-Wolf TF770.jpg" },
  { id: "accessories-3", title: "Игровая клавиатура RGB", price: "170 000 сум", img: "images/Игровая клавиатура.jpg" },
  { id: "accessories-4", title: "Механическая клавиатура AJAZZ AK820", price: "290 000 сум", img: "images/Механическая клавиатура AJAZZ AK820.jpg" },
  { id: "accessories-5", title: "Беспроводные наушники Hoco W35 MAX", price: "155 000 сум", img: "images/Беспроводные наушники Hoco W35 MAX.jpg" },

  { id: "clothes-1", title: "Джинсы женские мужские y2k", price: "155 000 сум", img: "images/Джинсы женские мужские y2k.jpg" },
  { id: "clothes-2", title: "Джинсы JNCO", price: "245 000 сум", img: "images/Джинсы JNCO.jpg" },
  { id: "clothes-3", title: "Женский лонгслив", price: "400 000 сум", img: "images/Женский лонгслив.jpg" },
  { id: "clothes-4", title: "Шорты женские мужские y2k", price: "490 000 сум", img: "images/shorty.jpg" },
  { id: "clothes-5", title: "Шорты женские y2k", price: "490 000 сум", img: "images/Шорты женские y2k.jpg" },
  { id: "clothes-6", title: "Футболки оверсайз женские Y2K", price: "550 000 сум", img: "images/Футболки оверсайз женские Y2K.jpg" },
  { id: "clothes-7", title: "Женская футболка оверсайз, с принтом", price: "530 000 сум", img: "images/Женская футболка оверсайз, с принтом.jpg" },
  { id: "clothes-8", title: "Топ винтажный Y2K стиль", price: "399 000 сум", img: "images/Топ винтажный Y2K стиль.jpg" },
  { id: "clothes-9", title: "Футболка  женская y2K", price: "399 000 сум", img: "images/Футболка  женская y2K.jpg" },

  {
    id: "clothes-10",
    title: "Футболка оверсайз Y2K",
    price: "125 100 сум",
    oldPrice: "450 000 сум",
    img: "images/Футболки оверсайз женские Y2K.jpg",
    gallery: ["images/oversize1.jpg", "images/oversize2.jpg", "images/oversize3.jpg"],
    description: "Футболка в стиле Y2K. Стильный дизайн, приятная ткань.",
    colors: ["Конфетный", "Чёрный", "Белый"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },

  // ...добавь другие товары с уникальными id
];

card.addEventListener("click", () => {
  window.location.href = `product.html?id=${product.id}`;
});
