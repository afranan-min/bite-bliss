const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem'); // Ensure this import is correct

// POST route to add a new food item
router.post('/addFoodItem', async (req, res) => {
    try {
        const { CategoryName, name, img, options, description } = req.body;

        console.log('CategoryName:', CategoryName);
        console.log('Name:', name);
        console.log('Image URL:', img);
        console.log('Options:', options);
        console.log('Description:', description);

        // Create a new food item instance
        const newFoodItem = new FoodItem({
            CategoryName,
            name,
            img,
            options,
            description,
        });

        // Save the food item to the database
        await newFoodItem.save();
        res.status(200).json({ msg: 'Food item added successfully' });
    } catch (err) {
        console.error('Error adding food item:', err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
