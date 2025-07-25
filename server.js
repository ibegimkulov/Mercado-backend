const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch'); // Убедись, что установлен: npm install node-fetch

const app = express();
const PORT = process.env.PORT || 3000;

const products = require('./data/products.json');

const TELEGRAM_TOKEN = '7893139984:AAGcgbmlJdyh9s1NWkta3aNwY0srkjPyz2A';
const TELEGRAM_CHAT_ID = '2019801953';

app.use(cors());
app.use(express.json());

// Получение всех товаров
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Приём заказа и отправка уведомления в Telegram
app.post('/api/orders', async (req, res) => {
    const { name, phone, cart } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ message: 'Имя и телефон обязательны' });
    }

    if (!Array.isArray(cart) || cart.length === 0) {
        return res.status(400).json({ message: 'Корзина пуста или некорректна' });
    }

    const productList = cart.map(p => `• ${p.title} - ${p.price}`).join('\n');
    const message = `<b>Новый заказ!</b>\n\n👤 <b>Имя:</b> ${name}\n📱 <b>Телефон:</b> ${phone}\n🛒 <b>Товары:</b>\n${productList}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();
        if (!data.ok) {
            throw new Error(`Ошибка Telegram API: ${data.description}`);
        }

        res.status(201).json({ message: 'Заказ успешно отправлен в Telegram' });

    } catch (error) {
        console.error('Ошибка при отправке в Telegram:', error);
        res.status(500).json({ message: 'Ошибка при отправке в Telegram' });
    }
});

// Раздача frontend из папки frontend в папке backend
app.use(express.static(__dirname));

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Запуск сервера
app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на порту: ${PORT}`);
});
