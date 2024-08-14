// In your routes file, e.g., Routes/OrderData.js

const express = require('express');
const router = express.Router();
const Order = require('../models/Orders'); // Assuming you have an Order model

// GET route to fetch all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        console.error('Error fetching orders:', err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
