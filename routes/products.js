const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

router.get('/', (req, res) => {
    const { category } = req.query;

    if (category) {
        const filtered = products.filter(p => p.category === category);
        return res.json(filtered);
    }

    res.json(products);
});

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found'});
    }

    res.json(product);
});

module.exports = router;